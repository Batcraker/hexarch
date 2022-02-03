import { Products } from './Products'

export type BasketId = string;

export type Basket = {
    id: BasketId,
    elementos: Products[]
}