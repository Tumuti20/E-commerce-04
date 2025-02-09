import React, { useEffect, useState } from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
import Login from './components/Login';

export const backend_url = "https://extro-intro-backend-v1du.onrender.com"
export const currency = "ksh"

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token')? localStorage.getItem('token') : "")

  useEffect(()=>{
    localStorage.setItem('token', token)
  },[token])

  return (
    <main>
      <ToastContainer />
      {token === "" ?(
        <Login setToken={setToken}/>
      ):(
        <div className='bg-primary text-[#404040]'>
        <div className='mx-auto max-w-[1910px] flex flex-col sm:flex-row'>
          <Sidebar setToken={setToken}/>
          <Routes>
            <Route path='/' element={<Add token={token}/>}/>
            <Route path='/list' element={<List token={token}/>}/>
            <Route path='/orders' element={<Orders token={token}/>}/>
          </Routes>
        </div>
      </div>
      )}
    </main>
  )
}

export default App
