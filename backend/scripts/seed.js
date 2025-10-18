require('dotenv').config()
const mongoose = require('mongoose')
const Product = require('../models/Product')
const User = require('../models/User')
const bcrypt = require('bcrypt')

mongoose.connect(process.env.MONGO_URI).then(async ()=>{
  await Product.deleteMany({})
  await User.deleteMany({})
  const items = [
    {name:'TMT Steel Rods (8mm - 32mm)', category:'Steel', priceRange:'₹50-70 per kg', description:'High-yield TMT rods for structural work', image:'/assets/products/tmt_steel.png'},
    {name:'AAC Blocks 600x200x100', category:'AAC Blocks', priceRange:'Ask', description:'Lightweight aerated concrete blocks', image:'/assets/products/aac_block.png'},
    {name:'OPC Cement 50kg Bag', category:'Cement', priceRange:'₹350-450 per 50kg', description:'Ordinary Portland Cement for general construction', image:'/assets/products/cement_bag.png'},
    {name:'PVC Drainage Pipe 110mm', category:'PVC Pipes', priceRange:'Ask', description:'Durable PVC pipes for drainage', image:'/assets/products/pvc_pipe.png'},
    {name:'Ceramic Bathware Set', category:'Bathware', priceRange:'Ask', description:'Premium basin and sanitary set', image:'/assets/products/bathware.png'}
  ]
  await Product.insertMany(items)
  // Create an admin user (email: admin@doshi.com password: admin123) - change before production
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash('admin123', salt)
  await User.create({email:'admin@doshi.com', passwordHash:hash, role:'admin'})
  console.log('Seeded products and admin user (admin@doshi.com / admin123)')
  process.exit(0)
}).catch(e=>console.error(e))
