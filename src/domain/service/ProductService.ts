import { productRepository } from '../../infrastructure/repositories/productRepository'

export const ProducService = {
    getProduct: ()=>{
        return productRepository.getProduct()
    }
}

