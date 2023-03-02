import express from 'express'
import 'express-async-errors'
import { authentication } from './middlewares/authentication'

import { productsRoutes } from './products/routes'
import { usersRoutes } from './users/routes'
import { ValidationError } from './utils/ValidationError'

export const createServer = () => {
  const app = express()
  
  app.use(express.json())

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.use(authentication)
  
  app.use('/products', productsRoutes)
  app.use('/users', usersRoutes)
  
  app.use((error, req,res,next) => {
    if(error instanceof ValidationError) {
      res.status(400).json({
        message: error.message
      })
      return
    }
    console.log('Unexpected Error: ',error.message)
    res.status(500).json({
      message: 'Internal Server Error'
    })
  })
  
  return app
}