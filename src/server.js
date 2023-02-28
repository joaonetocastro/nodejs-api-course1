import express from 'express'
import 'express-async-errors'

import { productsRoutes } from './products/routes'
import { ValidationError } from './utils/ValidationError'

export const createServer = () => {
  const app = express()
  
  app.use(express.json())
  
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.use('/products', productsRoutes)
  
  app.use((error, req,res,next) => {
    if(error instanceof ValidationError) {
      res.status(400).json({
        message: error.message
      })
      return
    }
  
    res.status(500).json({
      message: 'Internal Server Error'
    })
  })
  
  return app
}