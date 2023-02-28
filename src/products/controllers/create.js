import { ValidationError } from '../../utils/ValidationError'
import {productsRepository} from '../repository'

export const create = async (req, res) => {
    if(!req.body.name) throw new ValidationError('Name required')
    if(!req.body.price) throw new ValidationError('Price Required')
    if(!req.body.quantity) throw new ValidationError('Quantity Required')

    const response = await productsRepository.create({
        name: req.body.name,
        price: Number(Number(req.body.price).toFixed(2)),
        quantity: Math.floor(Number(req.body.quantity)),
    })
    
    res.send(response)
}