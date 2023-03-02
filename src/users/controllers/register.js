import { ValidationError } from '../../utils/ValidationError'
import { usersRepository } from '../repository'
import bcrypt from 'bcrypt'

export const register = async (req, res) => {
    if(!req.body.username) throw new ValidationError('Username required')
    if(!req.body.password) throw new ValidationError('Password Required')

    const userExists = await usersRepository.getByUsername(req.body.username)

    if(userExists) {
        throw new ValidationError('User already registered.')
    }
    const passwordHash = await bcrypt.hash(req.body.password, 12)

    const response = await usersRepository.create({
        username: req.body.username,
        password: passwordHash,
    })

    res.send({
        _id: response._id, username: response.username, __v: response.__v
    })
}