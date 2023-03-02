import { ValidationError } from '../../utils/ValidationError'
import { usersRepository } from '../repository'

export const login = async (req, res) => {
    if(!req.body.username) throw new ValidationError('Username required')
    if(!req.body.password) throw new ValidationError('Password Required')

    const user = await usersRepository.getByUsername(req.body.username)

    if(!user || user.password !== req.body.password){
        throw new ValidationError('Invalid Credentials')
    }
    
    res.send({message: 'login successful'})
}