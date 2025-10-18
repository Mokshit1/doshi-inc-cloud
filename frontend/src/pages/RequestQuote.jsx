import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function RequestQuote(){
  const {productId} = useParams()
  const [qty,setQty] = useState(1)
  const [msg,setMsg] = useState('')
  const navigate = useNavigate()

  function submit(e){
    e.preventDefault()
    const token = localStorage.getItem('token')
    axios.post(import.meta.env.VITE_API_URL + '/api/quotes', {productId, qty, message: msg}, {headers: {Authorization: token}})
      .then(()=>{
        alert('Quote requested')
        navigate('/dashboard')
      }).catch(e=>{ alert('Login required or error') })
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold">Request Quote</h2>
      <form onSubmit={submit} className="mt-4 space-y-3">
        <label className="block">
          Quantity
          <input type="number" value={qty} onChange={e=>setQty(e.target.value)} className="w-full border rounded p-2"/>
        </label>
        <label className="block">
          Message (specs, delivery location)
          <textarea value={msg} onChange={e=>setMsg(e.target.value)} className="w-full border rounded p-2"></textarea>
        </label>
        <button className="px-4 py-2 bg-primary text-white rounded">Send Quote Request</button>
      </form>
    </div>
  )
}
