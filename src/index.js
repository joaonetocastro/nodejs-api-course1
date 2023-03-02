import * as dotenv from 'dotenv'
dotenv.config()
import { createServer } from './server'

createServer().then(app => {
  const port = 3000
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})