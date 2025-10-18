const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const Product = require('../models/Product')
const Quote = require('../models/Quote')

function requireAdmin(req,res,next){ if(req.user?.role === 'admin') return next(); return res.status(403).json({error:'forbidden'}) }

router.use(auth)
router.use(requireAdmin)

router.get('/products', async (req,res)=>{
  const list = await Product.find().sort({createdAt:-1})
  res.json(list)
})

router.post('/products', async (req,res)=>{
  const {name,category,priceRange,description,image} = req.body
  const p = await Product.create({name,category,priceRange,description,image})
  res.json(p)
})

router.get('/quotes', async (req,res)=>{
  const list = await Quote.find().sort({createdAt:-1})
  res.json(list)
})

router.post('/quotes/:id/respond', async (req,res)=>{
  const {id} = req.params
  const {text, from, status} = req.body
  const q = await Quote.findById(id)
  q.messages.push({from, text, date: new Date()})
  if(status) q.status = status
  await q.save()
  res.json(q)
})

module.exports = router
