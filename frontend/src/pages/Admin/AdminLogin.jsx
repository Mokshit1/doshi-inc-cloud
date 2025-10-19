import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin(){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  function submit(e){
    e.preventDefault();
    axios.post(import.meta.env.VITE_API_URL + '/api/auth/admin-login', { email, password })
      .then(res=>{
        // store token (exact string returned by backend)
        localStorage.setItem('adminToken', res.data.token);
        // go to the admin panel
        navigate('/admin');
      })
      .catch(err=>{
       
