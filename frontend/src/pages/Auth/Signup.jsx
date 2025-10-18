import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Signup(){
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()

  function submit(e){
    e.preventDefault()
    axios.post(import.meta.env.VITE_API_URL + '/api/auth/signup',{email,password})
      .then(()=>{
        alert('Account created. Please login')
        navigate('/login')
      }).catch(()=>alert('Error'))
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold">Signup</h2>
      <form onSubmit={submit} className="mt-4 space-y-3">
        <input className="w-full border p-2 rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full border p-2 rounded" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="px-4 py-2 bg-primary text-white rounded">Create account</button>
      </form>
    </div>
  )
}
