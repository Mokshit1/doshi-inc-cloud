const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const Quote = require('../models/Quote')
const Product = require('../models/Product')
const User = require('../models/User')

router.post('/', auth, async (req,res)=>{
  const {productId, qty, message} = req.body
  const product = await Product.findById(productId)
  const user = await User.findById(req.user.id)
  const quote = await Quote.create({productId, productName:product.name, userId:user._id, customerEmail:user.email, qty, message})
  // placeholder for email/notification
  res.json({ok:true})
})

router.get('/my', auth, async (req,res)=>{
  const list = await Quote.find({userId:req.user.id}).sort({createdAt:-1})
  res.json(list)
})

module.exports = router
