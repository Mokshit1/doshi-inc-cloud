import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">Trusted construction materials — 25+ years</h1>
          <p className="mt-4 text-gray-600">Cement · Steel · PVC Pipes · AAC Blocks · Bathware — quality you can build on.</p>
          <div className="mt-6 flex space-x-4">
            <Link to="/products" className="px-4 py-2 bg-primary text-white rounded">Explore Products</Link>
            <a href="/profile" className="px-4 py-2 border rounded">Company Profile</a>
          </div>
        </div>
        <div className="order-first md:order-last">
          <img src="/assets/products/hero.png" alt="construction materials" className="w-full rounded shadow" />
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Featured categories</h2>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <CategoryCard title="Cement" />
          <CategoryCard title="Steel" />
          <CategoryCard title="PVC Pipes" />
          <CategoryCard title="Bathware" />
        </div>
      </section>
    </section>
  )
}

function CategoryCard({title}){
  return (
    <div className="p-4 border rounded text-center">
      <div className="h-20 flex items-center justify-center text-lg font-medium">{title}</div>
      <div className="mt-2">
        <a href="/products" className="text-sm text-primary">View items →</a>
      </div>
    </div>
  )
}
