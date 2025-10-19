import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import Dashboard from './pages/User/Dashboard'
import AdminLogin from './pages/Admin/AdminLogin'
import AdminPanel from './pages/Admin/AdminPanel'
import ProductDetails from './pages/ProductDetails'
import RequestQuote from './pages/RequestQuote'
import Navbar from './components/Navbar'

export default function App(){
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="p-4 md:p-8">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path="/quote/:productId" element={<RequestQuote/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/dashboard" element={<Dashboard/>} />

          {/* HIDDEN ADMIN PANEL */}
          <Route path="/doshi-secure-admin/login" element={<AdminLogin />} />
          <Route path="/doshi-secure-admin" element={<AdminPanel />} />
        </Routes>
      </main>
    </div>
  )
}
