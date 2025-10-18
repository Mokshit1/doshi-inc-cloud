import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Dashboard(){
  const [quotes,setQuotes] = useState([])

  useEffect(()=>{
    const token = localStorage.getItem('token')
    axios.get(import.meta.env.VITE_API_URL + '/api/quotes/my', {headers:{Authorization:token}})
      .then(r=>setQuotes(r.data))
      .catch(()=>{})
  },[])

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold">Your Requests</h2>
      <div className="mt-4 space-y-3">
        {quotes.map(q=> (
          <div key={q._id} className="p-3 border rounded">
            <div className="flex justify-between">
              <div>{q.productName} — {q.qty}</div>
              <div className="text-sm">Status: {q.status}</div>
            </div>
            <div className="mt-2 text-sm text-gray-600">Messages: {q.messages?.length || 0}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
