const uuid = require('uuid')
import { Products } from '../models/Products'
import { Basket } from '../models/Basket'

const tieneProducto = (basket: Basket, product: Products)=>
    basket.elementos.find((elemento)=> elemento.id === product.id)


const crearCanasta = (product: Products) =>({
    id: uuid.v4(),
    elementos: [product]
})

const incrementarCanasta = (basket: Basket, product: Products): Basket=>({
    ...basket,
    elementos: [...basket.elementos, product]
})

const InProdutsToBasket = (product: Products, basket?: Basket|null): Basket =>
    basket
        ? tieneProducto(basket, product)
            ? basket
            : incrementarCanasta(basket, product)
        : crearCanasta(product)


export const basketService = {
    InProdutsToBasket
}