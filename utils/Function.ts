import { CartItem } from "types";

export const calcSuptotal = (cart: CartItem[], setSupTotal: Function) => {
    let total = 0;
    cart.map(item => {
        total += item.price * item.quantity
        setSupTotal(total)
    })
}