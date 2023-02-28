import {productsRepository} from '../repository'

export const create = async (req, res) => {
    const response = await productsRepository.create(req.body)
    
    res.send(response)
}