import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

export default function Products(){
  const [products,setProducts] = useState([])

  useEffect(()=>{
    axios.get(import.meta.env.VITE_API_URL + '/api/products')
      .then(r=>setProducts(r.data))
      .catch(e=>console.error(e))
  },[])

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold">Products</h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p=> <ProductCard key={p._id} product={p} />)}
      </div>
    </div>
  )
}
