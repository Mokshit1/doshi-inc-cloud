const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

router.get('/', async (req,res)=>{
  const list = await Product.find().sort({createdAt:-1})
  res.json(list)
})

router.get('/:id', async (req,res)=>{
  const p = await Product.findById(req.params.id)
  res.json(p)
})

module.exports = router
