import {Router} from 'express'
import { create } from './controllers/create'
import { deleteById } from './controllers/deleteById'
import { getAll } from './controllers/getAll'
import { getById } from './controllers/getById'

const productsRoutes = Router()

productsRoutes.post('/', create)
productsRoutes.get('/', getAll)
productsRoutes.get('/:id', getById)
productsRoutes.delete('/:id', deleteById)

export { productsRoutes }