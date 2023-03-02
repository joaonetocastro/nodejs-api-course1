import {Router} from 'express'
import { login } from './controllers/login'
import { register } from './controllers/register'

const usersRoutes = Router()

usersRoutes.post('/register', register)
usersRoutes.post('/login', login)

export { usersRoutes }