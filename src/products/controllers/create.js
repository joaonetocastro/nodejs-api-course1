import { ValidationError } from '../../utils/ValidationError'
import {productsRepository} from '../repository'

export const create = async (req, res) => {
    if(!req.body.name) throw new ValidationError('Name required')
    
    const response = await productsRepository.create(req.body)
    
    res.send(response)
}