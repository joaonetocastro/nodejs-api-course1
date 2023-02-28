import {productsRepository} from '../repository'

export const getById = async (req, res) => {
    console.log(req.params)
    const response = await productsRepository.getById(req.params.id)
    if(!response) {
        res.status(404).send()
        return
    }
    res.json(response)
}