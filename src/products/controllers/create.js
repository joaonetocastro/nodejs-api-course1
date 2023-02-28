import { ValidationError } from '../../utils/ValidationError'
import {productsRepository} from '../repository'

export const create = async (req, res) => {
    if(!req.body.name) throw new ValidationError('Name required')
    if(!req.body.price) throw new ValidationError('Price Required')
    if(!req.body.quantity) throw new ValidationError('Quantity Required')

    const response = await productsRepository.create(req.body)
    
    res.send(response)
}