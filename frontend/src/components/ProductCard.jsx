import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({product}){
  return (
    <div className="border rounded p-4 flex flex-col">
      <img src={product.image || '/assets/products/product-placeholder.png'} alt={product.name} className="h-40 object-cover rounded" />
      <h3 className="mt-3 font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.category}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-bold">₹{product.priceRange || 'Ask'}</span>
        <div className="space-x-2">
          <Link to={`/product/${product._id}`} className="text-sm underline">Details</Link>
          <Link to={`/quote/${product._id}`} className="text-sm text-primary">Request Quote</Link>
        </div>
      </div>
    </div>
  )
}
