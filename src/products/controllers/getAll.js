import {productsRepository} from '../repository'

export const getAll = async (req, res) => {
    const response = await productsRepository.getAll()
    
    res.send(response)
}