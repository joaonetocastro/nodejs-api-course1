import {Router} from 'express'
import { deleteById } from './controllers/deleteById'
import { getAll } from './controllers/getAll'
import { getById } from './controllers/getById'

const productsRoutes = Router()

productsRoutes.get('/', getAll)
productsRoutes.get('/:id', getById)
productsRoutes.delete('/:id', deleteById)

export { productsRoutes }