import {productsRepository} from '../repository'

export const deleteById = async (req, res) => {
    console.log(req.params)
    productsRepository.deleteById(req.params.id)
    
    res.send()
}