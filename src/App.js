import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Payment from './pages/Payment'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/products" element={<ProductDetail/>}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/payment" element={<Payment/>}/>
    </Routes>
  )
}

export default App