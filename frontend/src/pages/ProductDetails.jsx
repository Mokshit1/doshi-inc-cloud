import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export default function ProductDetails(){
  const {id} = useParams()
  const [product,setProduct] = useState(null)

  useEffect(()=>{
    axios.get(import.meta.env.VITE_API_URL + '/api/products/' + id).then(r=>setProduct(r.data)).catch(()=>{})
  },[id])

  if(!product) return <div>Loading...</div>

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold">{product.name}</h1>
      <img src={product.image||'/assets/products/product-placeholder.png'} alt="" className="mt-4 w-full h-64 object-cover rounded" />
      <p className="mt-4 text-gray-700">{product.description}</p>
      <div className="mt-6">
        <Link to={`/quote/${product._id}`} className="px-4 py-2 bg-primary text-white rounded">Request Quote</Link>
      </div>
    </div>
  )
}
