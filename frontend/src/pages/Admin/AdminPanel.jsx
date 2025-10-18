import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function AdminPanel(){
  const [products,setProducts] = useState([])
  const [quotes,setQuotes] = useState([])
  const token = localStorage.getItem('adminToken')

  useEffect(()=>{
    axios.get(import.meta.env.VITE_API_URL + '/api/admin/products',{headers:{Authorization:token}}).then(r=>setProducts(r.data))
    axios.get(import.meta.env.VITE_API_URL + '/api/admin/quotes',{headers:{Authorization:token}}).then(r=>setQuotes(r.data))
  },[])

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold">Admin Panel</h1>
      <section className="mt-4">
        <h2 className="font-semibold">Products</h2>
        <div className="mt-2 space-y-2">
          {products.map(p=> <div key={p._id} className="p-2 border rounded flex justify-between">{p.name}<div><button className="mr-2">Edit</button><button>Delete</button></div></div>)}
        </div>
        <AddProductForm token={token} onAdded={prod=>setProducts(prev=>[prod,...prev])} />
      </section>

      <section className="mt-8">
        <h2 className="font-semibold">Quote Requests</h2>
        <div className="mt-2 space-y-2">
          {quotes.map(q=> <div key={q._id} className="p-2 border rounded">{q.customerEmail} — {q.productName} — <button>Respond</button></div>)}
        </div>
      </section>
    </div>
  )
}

function AddProductForm({token, onAdded}){
  const [name,setName] = useState('')
  const [category,setCategory] = useState('Cement')
  const [priceRange,setPriceRange] = useState('Ask')

  function submit(e){
    e.preventDefault()
    axios.post(import.meta.env.VITE_API_URL + '/api/admin/products', {name,category,priceRange}, {headers:{Authorization:token}})
      .then(r=>{ onAdded(r.data); setName('') })
      .catch(()=>alert('Error'))
  }

  return (
    <form onSubmit={submit} className="mt-3 space-y-2">
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Product name" className="border p-2 rounded w-full" />
      <select value={category} onChange={e=>setCategory(e.target.value)} className="border p-2 rounded w-full">
        <option>Cement</option>
        <option>Steel</option>
        <option>PVC Pipes</option>
        <option>AAC Blocks</option>
        <option>Bathware</option>
      </select>
      <input value={priceRange} onChange={e=>setPriceRange(e.target.value)} placeholder="Price range or 'Ask'" className="border p-2 rounded w-full" />
      <button className="px-3 py-2 bg-primary text-white rounded">Add product</button>
    </form>
  )
}
