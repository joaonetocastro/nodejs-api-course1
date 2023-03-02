import jwt from 'jsonwebtoken'
import { ValidationError } from "../utils/ValidationError"

export const authentication = (req,res,next) => {
    if(!req.headers.authorization) {
        throw new ValidationError('Authorization Header Required')
    }
    try {
        const jwtSecret = 'secret-key'
        const decodedToken = jwt.verify(req.headers.authorization, jwtSecret)
        if(!decodedToken) {
            throw new ValidationError('Authorization Token Invalid')
        }
    } catch (e) {
        throw new ValidationError('Authorization Token Invalid')
    }
    next()
}