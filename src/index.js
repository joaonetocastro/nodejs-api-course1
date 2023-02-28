import { createServer } from './server'

const app = createServer()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})