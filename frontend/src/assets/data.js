import img1 from './product_1.jpg'
import img2_1 from './product_2_1.png'
import img2_2 from './product_2_2.jpg'
// import img2_3 from './product_2_3.png'
// import img2_4 from './product_2_4.png'
import img3 from './product_3.png'
import img4_1 from './product_4_1.png'
import img4_2 from './product_4_2.jpg'
// import img4_3 from './product_4_3.png'
// import img4_4 from './product_4_4.png'
import img5 from './product_5.jpg'
import img6 from './product_6.png'
import img7 from './product_7.png'
import img8 from './product_8.png'
import img9 from './product_9.jpg'
import img10 from './product_10.png'
import img11 from './product_11.png'
import img12 from './product_12.png'
import img13 from './product_13.jpg'
import img14 from './product_14.jpg'
import img15 from './product_15.png'
import img16 from './product_16.jpg'
import img17 from './product_17.png'
import img18 from './product_18.jpg'
import img19 from './product_19.jpg'
import img20 from './product_20.png'
import img21 from './product_21.jpg'
import img22 from './product_22.png'
import img23 from './product_23.jpg'
import img24 from './product_24.jpg'
import img25 from './product_25.jpg'
import img26 from './product_26.jpg'
import img27 from './product_27.jpg'
import img28 from './product_28.png'
import img29 from './product_29.jpg'
import img30 from './product_30.png'
import img31 from './product_31.png'
import img32 from './product_32.png'
import img33 from './product_33.jpg'
import img34 from './product_34.jpg'
import img35 from './product_35.jpg'
import img36 from './product_36.jpg'
import img37 from './product_37.jpg'
import img38 from './product_38.jpg'
import img39 from './product_39.png'
import img40 from './product_40.png'
import img41 from './product_41.png'
import img42 from './product_42.jpg'
import img43 from './product_43.png'
import img44 from './product_44.jpg'
import img45 from './product_45.png'
import img46 from './product_46.png'
import img47 from './product_47.png'
import img48 from './product_48.png'
import img49 from './product_49.png'
import img50 from './product_50.png'
import img51 from './product_51.jpg'
import img52 from './product_52.png'

// Blogs
import blog1 from "../assets/blogs/blog1.png"
import blog2 from "../assets/blogs/blog2.png"
import blog3 from "../assets/blogs/blog3.png"
import blog4 from "../assets/blogs/blog4.png"


export const products = [
    {
        _id: "1",
        name: "Cozy Horizon",
        description: "Wrap yourself in unparalleled comfort with the Cozy Horizon Hoodie. Crafted from ultra-soft, breathable fabric, this hoodie blends modern style with all-day coziness. Featuring a relaxed fit, a spacious kangaroo pocket, and an adjustable hood, it’s perfect for staying warm while looking effortlessly chic. Whether you're lounging at home or exploring the city, this hoodie is your perfect companion for every adventure.",
        price: 1500,
        image: [img1],
        category: "Hoodie",
        subCategory: "Awesome",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        popular: false
    },
    {
        _id: "2",
        name: " Premium Cotton Tee",
        description: "A premium t-shirt offering exceptional comfort and a smooth texture, great for everyday wear.",
        price: 800,
        image: [img2_1, img2_2  ],
        category: "Shirt",
        subCategory: "Great",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        popular: false
    },
    {
        _id: "3",
        name: "Carry Bliss Tote",
        description: "A versatile and stylish tote bag crafted from premium materials, perfect for carrying your essentials with ease and elegance. Its spacious interior and sturdy straps make it ideal for everyday use, whether you're heading to work, the gym, or a casual outing. Designed to blend fashion and functionality, this tote is your go-to accessory for a chic and organized lifestyle.",
        price: 700,
        image: [img3],
        category: "Tote bag",
        subCategory: "Awesome",
        sizes: ["S", "L", "XL"],
        date: 1716234545448,
        popular: true
    },
    {
        _id: "4",
        name: "Classic  Casual T-Shirt",
        description: "A casual t-shirt made from breathable cotton, suitable for any informal occasion.",
        price: 900,
        image: [img4_1, img4_2],
        category: "Shirt",
        subCategory: "Awesome",
        sizes: ["S", "M", "XXL"],
        date: 1716621345448,
        popular: false
    },
    {
        _id: "5",
        name: "Cloud Comfort Hoodie",
        description: "Cozy up in this ultra-soft hoodie designed for comfort and style. Made with premium, breathable fabric, it features a modern fit, kangaroo pocket, and an adjustable drawstring hood. Perfect for chilly mornings, casual outings, or lazy days at home. Experience the perfect blend of warmth and sophistication in every stitch.",
        price: 1400,
        image: [img5],
        category: "Hoodie",
        subCategory: "Great",
        sizes: ["M", "L", "XL"],
        date: 1716622345448,
        popular: false
    },
    {
        _id: "6",
        name: "Graphic Tee ",
        description: "Fun and vibrant graphic tee, perfect for outdoor play and adventures.",
        price: 950,
        image: [img6],
        category: "Shirt",
        subCategory: "Great",
        sizes: ["XL", "S", "M"],
        date: 1716623345448,
        popular: true
    },
    {
        _id: "7",
        name: " Soft Knit Shirt",
        description: "A comfortable, lightweight shirt ideal for layering during cool weather.",
        price: 800,
        image: [img7],
        category: "Shirt",
        subCategory: "Dope",
        sizes: ["S", "M", "L", "XL"],
        date: 1716624345448,
        popular: false
    },
    {
        _id: "8",
        name: "Casual  Shirt",
        description: "Warm and comfortable shirt",
        price: 1000,
        image: [img8],
        category: "Shirt",
        subCategory: "Great",
        sizes: ["M", "L", "XL", "XXL"],
        date: 1716625345448,
        popular: true
    },
    {
        _id: "9",
        name: "The Everyday Chic Tote",
        description: "Carry your essentials in style with this versatile and durable tote bag. Designed with functionality and flair, it's perfect for everyday use, from shopping sprees to weekend getaways. Crafted from eco-friendly materials, this tote bag is lightweight, spacious, and features sturdy handles for effortless carrying.",
        price: 700,
        image: [img9],
        category: "Tote bag",
        subCategory: "Awesome",
        sizes: ["S", "M", "L"],
        date: 1716626345448,
        popular: false
    },
    {
        _id: "10",
        name: "Infinite Threads",
        description: "This ultra-soft, lightweight shirt combines comfort and style seamlessly. Designed with a modern fit, it features premium fabric that feels gentle on the skin, making it perfect for everyday wear or special occasions. Available in vibrant colors and minimalist designs, this shirt is your go-to choice for effortless elegance.",
        price: 1000,
        image: [img10],
        category: "Shirt",
        subCategory: "Dope",
        sizes: ["S", "M", "L", "XL"],
        date: 1716627345448,
        popular: false
    },
    {
        _id: "11",
        name: "Classic Slim Fit Shirt",
        description: "Durable and stylish slim fit shirt, suitable for both casual and formal outfits.",
        price: 950,
        image: [img11],
        category: "Shirt",
        subCategory: "Awesome",
        sizes: ["M", "L", "XL"],
        date: 1716628345448,
        popular: true
    },
    {
        _id: "12",
        name: " Playtime shirts",
        description: "Comfortable shirts made for active kids, featuring an elastic waistband for easy wear.",
        price: 800,
        image: [img12],
        category: "Shirt",
        subCategory: "Awesome",
        sizes: ["S", "M", "L"],
        date: 1716629345448,
        popular: false
    },
    {
        _id: "13",
        name: " Fit Hoodie",
        description: "Trendy mid-rise hoodie, made to pair well with any top .",
        price: 2900,
        image: [img13],
        category: "Hoodie",
        subCategory: "Awesome",
        sizes: ["S", "M", "L", "XL"],
        date: 1716630345448,
        popular: true
    },
    {
        _id: "14",
        name: "Functional tote bag",
        description: "Rugged tote bag featuring multiple pockets, ideal for casual or outdoor adventures.",
        price: 900,
        image: [img14],
        category: "Tote bag",
        subCategory: "Awesome",
        sizes: ["M", "L", "XL", "XXL"],
        date: 1716631345448,
        popular: false
    },
    {
        _id: "15",
        name: "Boys Adventure shirt",
        description: "Comfortable elastic shirt designed for active boys, ideal for play and outdoor activities.",
        price: 800,
        image: [img15],
        category: "Shirt",
        subCategory: "Dope",
        sizes: ["XM", "S", "M"],
        date: 1716632345448,
        popular: true
    },
    {
        _id: "16",
        name: "Floral Print tote bag",
        description: "Soft and stretchy floral print tote bag, perfect for comfort and style.",
        price: 880,
        image: [img16],
        category: "Tote bag",
        subCategory: "Awesome",
        sizes: ["S", "M", "L"],
        date: 1716633345448,
        popular: true
    },
    {
        _id: "17",
        name: " Lightweight shirt",
        description: "Stylish and warm shirt, great for layering in chilly weather.",
        price: 990,
        image: [img17],
        category: "Shirt",
        subCategory: "Dope",
        sizes: ["M", "L", "XL"],
        date: 1716634345448,
        popular: true
    },
    {
        _id: "18",
        name: "Classic tote bag",
        description: "A timeless tote bag with a tailored fit, perfect for any occasion.",
        price: 610,
        image: [img18],
        category: "Tote bag",
        subCategory: "Awesome",
        sizes: ["S", "M", "L", "XL"],
        date: 1716635345448,
        popular: false
    },
    {
        _id: "19",
        name: "tote bag Winter Parka",
        description: "Warm winter parka with a durable build, designed to withstand cold temperatures.",
        price: 770,
        image: [img19],
        category: "Tote bag",
        subCategory: "Awesome",
        sizes: ["S", "M", "L"],
        date: 1716636345448,
        popular: false
    },
    {
        _id: "20",
        name: " Classic shirt",
        description: "A versatile shirt, great for layering in all seasons.",
        price: 950,
        image: [img20],
        category: "Shirt",
        subCategory: "Dope",
        sizes: ["S", "M", "L"],
        date: 1716637345448,
        popular: true
    },
    {
        _id: "21",
        name: " Wool Blend Sweater",
        description: "This warm wool blend sweater provides both comfort and a stylish look.",
        price: 1600,
        image: [img21],
        category: "Hoodie",
        subCategory: "Awesome",
        sizes: ["S", "M", "L", "XL"],
        date: 1716638345448,
        popular: true
    },
    {
        _id: "22",
        name: " Rugged Denim shirt",
        description: "Durable denim jacket with a vintage finish, suitable for layering in all seasons.",
        price: 900,
        image: [img22],
        category: "Shirt",
        subCategory: "Dope",
        sizes: ["M", "L", "XL"],
        date: 1716639345448,
        popular: false
    },
    {
        _id: "23",
        name: " Fleece tote bag",
        description: "Soft and cozy tote bag, perfect for everyone.",
        price: 850,
        image: [img23],
        category: "Tote bag",
        subCategory: "Awesome",
        sizes: ["S", "M", "L"],
        date: 1716640345448,
        popular: false
    },
    {
        _id: "24",
        name: "Kids Faux Leather Moto Jacket",
        description: "Trendy faux leather jacket with sleek zipper details, adding an edgy touch to any outfit.",
        price: 870,
        image: [img24],
        category: "Tote bag",
        subCategory: "Awesome",
        sizes: ["S", "M", "L"],
        date: 1716641345448,
        popular: true
    },
    {
        _id: "25",
        name: "Kids Winter Tshirt",
        description: "Soft winter gloves with a fleece lining, designed to keep hands warm.",
        price: 1000,
        image: [img25],
        category: "Tote bag",
        subCategory: "Awesome",
        sizes: ["M", "L"],
        date: 1716642345448,
        popular: true
    },
    {
        _id: "26",
        name: "Women Cashmere Scarf",
        description: "Elegant cashmere scarf, ideal for adding warmth and a touch of luxury.",
        price: 1200,
        image: [img26],
        category: "Hoodie",
        subCategory: "Awesome",
        sizes: ["One Size"],
        date: 1716643345448,
        popular: false
    },
    {
        _id: "27",
        name: "Kids Cozy Beanie",
        description: "Warm and comfortable beanie, ideal for keeping kids warm during cold days.",
        price: 690,
        image: [img27],
        category: "Tote bag",
        subCategory: "Awesome",
        sizes: ["One Size"],
        date: 1716644345448,
        popular: false
    },
    {
        _id: "28",
        name: "Men Classic Leather Belt",
        description: "High-quality leather belt with a durable buckle, perfect for formal wear.",
        price: 980,
        image: [img28],
        category: "Shirt",
        subCategory: "Awesome",
        sizes: ["M", "L", "XL"],
        date: 1716645345448,
        popular: false
    },
    {
        _id: "29",
        name: "Women Sun Hat",
        description: "Wide-brimmed sun hat, perfect for beach days and outdoor activities.",
        price: 1200,
        image: [img29],
        category: "Hoodie",
        subCategory: "Awesome",
        sizes: ["One Size"],
        date: 1716646345448,
        popular: true
    },
    {
        _id: "30",
        name: "Kids Polarized Sunglasses",
        description: "Stylish polarized sunglasses for kids, providing excellent UV protection.",
        price: 600,
        image: [img30],
        category: "Tote bag",
        subCategory: "Awesome",
        sizes: ["One Size"],
        date: 1716647345448,
        popular: true
    },

    {
        _id: "31",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 990,
        image: [img31],
        category: "Shirt",
        subCategory: "Great",
        sizes: ["S", "M", "L", "XL"],
        date: 1716645345448,
        popular: false
    },
    {
        _id: "32",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 950,
        image: [img32],
        category: "Shirt",
        subCategory: "Great",
        sizes: ["S", "M", "L", "XL"],
        date: 1716646445448,
        popular: false
    },
    {
        _id: "33",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 1200,
        image: [img33],
        category: "Tote bag",
        subCategory: "Great",
        sizes: ["S", "M", "L", "XL"],
        date: 1716647545448,
        popular: false
    },
    {
        _id: "34",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 1800,
        image: [img34],
        category: "Hoodie",
        subCategory: "Awesome",
        sizes: ["S", "M", "L", "XL"],
        date: 1716648645448,
        popular: false
    },
    {
        _id: "35",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 2400,
        image: [img35],
        category: "Hoodie",
        subCategory: "Awesome",
        sizes: ["S", "M", "L", "XL"],
        date: 1716649745448,
        popular: false
    },
    {
        _id: "36",
        name: "Women Zip-Front Relaxed black T-shirt",
        description: "Soft and stretchy floral print leggings, perfect for comfort and style.",
        price: 2700,
        image: [img36],
        category: "Hoodie",
        subCategory: "Great",
        sizes: ["S", "M", "L", "XL"],
        date: 1716650845448,
        popular: false
    },
    {
        _id: "37",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 2500,
        image: [img37],
        category: "Hoodie",
        subCategory: "Awesome",
        sizes: ["S", "M", "L", "XL"],
        date: 1716651945448,
        popular: false
    },
    {
        _id: "38",
        name: "Kids Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 800,
        image: [img38],
        category: "Tote bag",
        subCategory: "Awesome",
        sizes: ["S", "M", "L", "XL"],
        date: 1716653045448,
        popular: false
    },
    {
        _id: "39",
        name: "Men Printed Plain Cotton Shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 760,
        image: [img39],
        category: "Shirt",
        subCategory: "Great",
        sizes: ["S", "M", "L", "XL"],
        date: 1716654145448,
        popular: false
    },
    {
        _id: "40",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "An everyday essential cotton tee for women, offering simplicity and comfort.",
        price: 990,
        image: [img40],
        category: "Shirt",
        subCategory: "Great",
        sizes: ["S", "M", "L", "XL"],
        date: 1716655245448,
        popular: false
    },
    {
        _id: "41",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 870,
        image: [img41],
        category: "Shirt",
        subCategory: "Awesome",
        sizes: ["S", "M", "L", "XL"],
        date: 1716656345448,
        popular: false
    },
    {
        _id: "42",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "An everyday essential cotton tee for women, offering simplicity and comfort.",
        price: 900,
        image: [img42],
        category: "Tote bag",
        subCategory: "Awesome",
        sizes: ["S", "M", "L", "XL"],
        date: 1716657445448,
        popular: false
    },
    {
        _id: "43",
        name: "Kid Tapered Slim Fit Trouser",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 880,
        image: [img43],
        category: "Shirt",
        subCategory: "Dope",
        sizes: ["S", "M", "L", "XL"],
        date: 1716658545448,
        popular: false
    },
    {
        _id: "44",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A timeless trench coat with a tailored fit, perfect for any occasion",
        price: 1300,
        image: [img44],
        category: "Hoodie",
        subCategory: "Awesome",
        sizes: ["S", "M", "L", "XL"],
        date: 1716659645448,
        popular: false
    },
    {
        _id: "45",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 990,
        image: [img45],
        category: "Shirt",
        subCategory: "Great",
        sizes: ["S", "M", "L", "XL"],
        date: 1716660745448,
        popular: false
    },
    {
        _id: "46",
        name: "Men Slim Fit Relaxed Denim Shirt",
        description: "A timeless trench coat with a tailored fit, perfect for any occasion.",
        price: 900,
        image: [img46],
        category: "Shirt",
        subCategory: "Awesome",
        sizes: ["S", "M", "L", "XL"],
        date: 1716661845448,
        popular: false
    },
    {
        _id: "47",
        name: "Kid Tapered Slim Fit Trouser",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 900,
        image: [img47],
        category: "Shirt",
        subCategory: "Dope",
        sizes: ["S", "M", "L", "XL"],
        date: 1716662945448,
        popular: false
    },
    {
        _id: "48",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A timeless trench coat with a tailored fit, perfect for any occasion.",
        price: 930,
        image: [img48],
        category: "Shirt",
        subCategory: "Awesome",
        sizes: ["S", "M", "L", "XL"],
        date: 1716664045448,
        popular: false
    },
    {
        _id: "49",
        name: "Women Tapered Slim Fit Trouser",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 800,
        image: [img49],
        category: "Shirt",
        subCategory: "Dope",
        sizes: ["S", "M", "L", "XL"],
        date: 1716665145448,
        popular: false
    },
    {
        _id: "50",
        name: "Kids Tapered Slim Fit Trouser",
        description: "A timeless trench coat with a tailored fit, perfect for any occasion.",
        price: 940,
        image: [img50],
        category: "Shirt",
        subCategory: "Dope",
        sizes: ["S", "M", "L", "XL"],
        date: 1716666245448, popular: false
    },
    {
        _id: "51",
        name: " Zip-Front Relaxed Fit Hoodie",
        description: "A timeless trench coat with a tailored fit, perfect for any occasion",
        price: 1820,
        image: [img51],
        category: "Hoodie",
        subCategory: "Awesome",
        sizes: ["S", "M", "L", "XL"],
        date: 1716667345448,
        popular: false
    },
    {
        _id: "52",
        name: " Slim Fit Relaxed Denim Shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 850,
        image: [img52],
        category: "Shirt",
        subCategory: "Awesome",
        sizes: ["S", "M", "L", "XL"],
        date: 1716668445448,
        popular: false
    }

]

export const blogs = [
    {title:"Top Shopping Tips for Smart Buyers", category: "Shirt", image: blog1 },
    {title:"Latest Trends in Online Shopping 2024", category: "Hoodie", image: blog2 },
    {title:"How to Spot the Best Deals Online", category: "Tote bag", image: blog3 },
    {title:"Why E-Commerce is the Future of Shopping", category: "Awesome", image: blog4 }
  ]