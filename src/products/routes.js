import {Router} from 'express'
import { deleteById } from './controllers/deleteById'
import { getAll } from './controllers/getAll'

const productsRoutes = Router()

productsRoutes.get('/', getAll)
productsRoutes.delete('/:id', deleteById)

export { productsRoutes }