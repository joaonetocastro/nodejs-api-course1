import {faker } from '@faker-js/faker'
import Crypto from 'crypto'

function makeProduct () {
    const id = Crypto.randomUUID()
    const name = faker.commerce.product()
    const price = Number((Math.random()*1000).toFixed(2))
    const quantity = Math.ceil(Math.random()*1000)

    return {
        id,
        name,
        price,
        quantity
    }
}

const products = []

for(let i = 0; i < 5; i++) {
    products.push(makeProduct())
}

console.log(products)