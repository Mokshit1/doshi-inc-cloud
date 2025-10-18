require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const authRoutes = require('./routes/auth')
const productRoutes = require('./routes/products')
const quoteRoutes = require('./routes/quotes')
const adminRoutes = require('./routes/admin')

const app = express()
app.use(cors())
app.use(express.json())

// static for any uploads (not used in cloudinary setup but helpful locally)
app.use('/uploads', express.static(path.join(__dirname,'uploads')))

app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/quotes', quoteRoutes)
app.use('/api/admin', adminRoutes)

const PORT = process.env.PORT || 5000
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
  console.log('Mongo connected')
  app.listen(PORT, ()=> console.log('Server running', PORT))
}).catch(e=>console.error(e))
