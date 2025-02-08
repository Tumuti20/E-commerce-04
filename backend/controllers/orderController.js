import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"
import Stripe from "stripe"

// global variables for payments
const currency = "kes"

//STRIPE GATEWAY INITIALIZATION
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

//controller function for placing orders using cod method
const placeOrder = async (req,res)=>{
try {
    const {userId, items, amount, address} =req.body
    const orderData = {
        userId,
        items,
        amount,
        address,
        paymentMethod:"COD",
        payment:false,
        date: Date.now()
    }

    const newOrder = new orderModel(orderData)
    await newOrder.save()

    await userModel.findByIdAndUpdate(userId, {cartData:{}})

    res.json({ success:true, message: "Order Placed"})
} catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message})
}
}

//controller function for placing orders using stripe method
const placeOrderStripe = async (req,res)=>{
    try {
        const {userId, items, amount, address} =req.body
        const {origin} = req.headers
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod:"stripe",
            payment:false,
            date: Date.now()
        }
        const newOrder = new orderModel(orderData) 
        await newOrder.save()

        const line_items = items.map((item)=>({
            price_data:{
                currency:currency,
                product_data:{
                    name: item.name
                },
                unit_amount: item.price * 100 * 1 // converting to kes currency
            },
            quantity:item.quantity
        }))

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment',
        })
        res.json({ success: true, session_url: session.url})
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message})
    }
}

//controller function for getting all the orders data from admin panel
const allOrders = async (req,res)=>{
    try {
        const orders = await orderModel.find({})
        res.json({success:true, orders})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

//controller function for GETTING USER ORDERS for frontend
const userOrders = async (req,res)=>{
    try {
        const {userId} = req.body
        const orders = await orderModel.find({userId})
        res.json({success:true, orders})
    } catch (error) {
            console.log(error) 
    res.json({ success: false, message: error.message})
    }
}

//controller function for updating order status from admin panel
const updateStatus = async (req,res)=>{
try {
    const {orderId, status} = req.body
    await orderModel.findByIdAndUpdate(orderId, {status})
    res.json({success:true, message: " Status Updated"})
} catch (error) {
    console.log(error) 
    res.json({ success: false, message: error.message})
}
}

//controller function for verify stripe (tempo method)
const verifyStripe = async (req,res)=>{
    const {orderId, success, userId} = req.body
    try {
        if(success === "true"){
            await orderModel.findByIdAndUpdate(orderId,{payment:true})
            await userModel.findByIdAndUpdate(userId, {cartData: {}})
            res.json({success:true})
        }else{
            await orderModel.findByIdAndDelete(orderId)
            res.json({success:false})
        }
    } catch (error) {
        console.log(error) 
        res.json({ success: false, message: error.message})
    }
}

export {placeOrder, placeOrderStripe, allOrders, userOrders, updateStatus, verifyStripe}