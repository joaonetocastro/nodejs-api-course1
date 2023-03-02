import { Product } from "../models/Product"

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

      return response
    }
}

export { productsRepository }