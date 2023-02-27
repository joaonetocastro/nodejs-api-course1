import express from 'express'
import { productsRoutes } from './products/routes'
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/products', productsRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})