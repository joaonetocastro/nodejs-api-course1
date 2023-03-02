import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../environment'
import { ValidationError } from "../utils/ValidationError"

export const authentication = (req,res,next) => {
    const publicPaths = ['/users/login', '/users/register']
    if(publicPaths.includes(req.path)) {
        next()
        return
    }

    if(!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
        throw new ValidationError('Authorization Header Required')
    }

    try {
        const token = req.headers.authorization.replace('Bearer ', '')
        const decodedToken = jwt.verify(token, JWT_SECRET)

        req.context = {
            userId: decodedToken.userId,
            username: decodedToken.username,
        }
        
        if(!decodedToken) {
            throw new ValidationError('Authorization Token Invalid')
        }
    } catch (e) {
        throw new ValidationError('Authorization Token Invalid')
    }
    next()
}