import {productsRepository} from '../repository'

export const getAll = async (req, res) => {
    const response = productsRepository.getAll()
    
    res.send(response)
}