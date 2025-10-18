import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="logo-doshi text-2xl">DOSHI<span className="logo-inc text-base">INC.</span></div>
        </div>
        <div className="hidden md:flex space-x-6 items-center text-sm">
          <Link to="/products" className="hover:text-primary">Products</Link>
          <a href="/profile" className="hover:text-primary">Company Profile</a>
          <Link to="/login" className="px-3 py-1 border rounded">Login</Link>
        </div>
        <div className="md:hidden">
          <details>
            <summary className="cursor-pointer">☰</summary>
            <div className="p-3 space-y-2">
              <Link to="/products">Products</Link>
              <a href="/profile">Company Profile</a>
              <Link to="/login">Login</Link>
            </div>
          </details>
        </div>
      </div>
    </nav>
  )
}
