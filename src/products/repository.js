import mongoose from 'mongoose'

const Product = mongoose.model('Product', mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  quantity: Number
}))
  
const productsRepository = {
    async getAll(){
        const response = await Product.find()
        return response
    },
    async deleteById(id) {
      await Product.deleteOne({_id: id})
    },
    async getById(id) {
      const product = await Product.findById(id)
      return product
    },
    async create(product) {
      const response = await Product.create({
        ...product
      })

      console.log({response})
      // products.push(createdProduct)

      return response
    }
}

export { productsRepository }