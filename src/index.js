import { createServer } from './server'

const app = createServer()
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})