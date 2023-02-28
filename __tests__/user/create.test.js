import {createServer} from "../../src/server"
import supertest from 'supertest'
// ...

test("GET /products", async () => {
	await supertest(createServer())
		.get("/products")
		.expect(200)
		.then((response) => {
			expect(Array.isArray(response.body)).toBeTruthy()
		})
})