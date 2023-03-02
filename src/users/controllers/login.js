import jwt from 'jsonwebtoken'
import { ValidationError } from '../../utils/ValidationError'
import { usersRepository } from '../repository'

export const login = async (req, res) => {
    if(!req.body.username) throw new ValidationError('Username required')
    if(!req.body.password) throw new ValidationError('Password Required')

    const user = await usersRepository.getByUsername(req.body.username)

    if(!user || user.password !== req.body.password){
        throw new ValidationError('Invalid Credentials')
    }

    const jwtSecret = 'secret-key'
    const token = jwt.sign({
        userId: user.id,
        username: user.username
    }, jwtSecret, {
        expiresIn: '1 hour'
    })
    
    const response = {
        accessToken: token,
        expiresIn: 60*60
    }
    
    res.send(response)
}