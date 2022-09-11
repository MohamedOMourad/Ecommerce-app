import { CartItem } from "types";

export const getFromStorage = (key: string): { items: CartItem[] } => {
    if (typeof window !== 'undefined') {
        const cart = window.localStorage.getItem(key)
        return cart === null ? { items: [] } : JSON.parse(cart)
    }
    return { items: [] }
}

export const setToStorage = (key: string, value: { items: CartItem[] }) => {
    if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value))
    }
}

export const removeFromStorage = (key: string) => {
    if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key)
    }
}
export const calcSuptotal = (cart: CartItem[], setSupTotal: Function) => {
    let total = 0;
    cart.map(item => {
        total += +item.price * item.quantity
        setSupTotal(total)
    })
}

