import {createServer} from "../../src/server"
import supertest from 'supertest'

test("GET /products", async () => {
  const product = {
    name: 'any_product',
    price: '98.72',
    quantity: '12'
  }
  
	await supertest(createServer())
		.post("/products")
    .send(product)
		.expect(200)
		.then((response) => {
      expect(response.body?.id).toBeTruthy()
			expect(response.body?.name).toBe('any_product')
			expect(response.body?.price).toBe(98.72)
			expect(response.body?.quantity).toBe(12)
		})
})