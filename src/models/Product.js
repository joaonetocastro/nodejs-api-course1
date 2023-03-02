import mongoose from 'mongoose'

export const Product = mongoose.model('Product', mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
}))
