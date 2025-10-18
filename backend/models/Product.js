const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  priceRange: String,
  image: String
},{timestamps:true})
module.exports = mongoose.model('Product', ProductSchema)
