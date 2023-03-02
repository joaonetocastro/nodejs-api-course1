import mongoose from 'mongoose'

export const Product = mongoose.model('Product', mongoose.Schema({
    id: String,
    name: String,
    price: Number,
    quantity: Number
  }))