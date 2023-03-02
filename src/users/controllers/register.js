import { ValidationError } from '../../utils/ValidationError'
import { usersRepository } from '../repository'

export const register = async (req, res) => {
    if(!req.body.username) throw new ValidationError('Username required')
    if(!req.body.password) throw new ValidationError('Password Required')

    const response = await usersRepository.create({
        username: req.body.username,
        password: req.body.password,
    })
    
    res.send({...response, password: undefined})
}