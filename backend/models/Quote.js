const mongoose = require('mongoose')
const QuoteSchema = new mongoose.Schema({
  productId: {type:mongoose.Types.ObjectId, ref:'Product'},
  productName: String,
  userId: {type:mongoose.Types.ObjectId, ref:'User'},
  customerEmail: String,
  qty: Number,
  message: String,
  status: {type:String, enum:['Pending','Negotiation','Confirmed','Shipped','Completed'], default:'Pending'},
  messages: [{from:String, text:String, date:Date}]
},{timestamps:true})
module.exports = mongoose.model('Quote', QuoteSchema)
