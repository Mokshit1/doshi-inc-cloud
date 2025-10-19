const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken')
const User = require('../models/User')

router.post('/signup', async (req,res)=>{
  const {email,password} = req.body
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  const user = await User.create({email, passwordHash:hash})
  res.json({ok:true})
})

router.post('/login', async (req,res)=>{
  const {email,password} = req.body
  const user = await User.findOne({email})
  if(!user) return res.status(401).json({error:'Invalid'})
  const valid = await bcrypt.compare(password, user.passwordHash)
  if(!valid) return res.status(401).json({error:'Invalid'})
  const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET)
  res.json({token})
})

// admin-login route
router.post('/admin-login', async (req,res)=>{
  const {email,password} = req.body
  const user = await User.findOne({email})
  if(!user || user.role !== 'admin') return res.status(401).json({error:'No admin'})
  const valid = await bcrypt.compare(password, user.passwordHash)
  if(!valid) return res.status(401).json({error:'Invalid'})
  const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET)
  res.json({token})
})

module.exports = router
