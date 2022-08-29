import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CartItem, Product } from 'types'

export interface CounterState {
    items: CartItem[]
}

const initialState: CounterState = {
    items: [
        {
            id: "1",
            name: 'Throwback Hip Bag',
            href: '#',
            color: 'Salmon',
            price: 90.00,
            quantity: 2,
            availableQty: 4,
            imageSrc:
                'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
            imageAlt:
                'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
        },
        {
            id: "2",
            name: 'Medium Stuff Satchel',
            href: '#',
            color: 'Blue',
            price: 32.00,
            quantity: 2,
            availableQty: 4,
            imageSrc:
                'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
            imageAlt:
                'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
        },
    ]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            console.log(action.payload)
            state.items = [...state.items, action.payload]
            console.log(state.items)
        },
        changeItemQuantity: (state, action: PayloadAction<{ val: number, id: number }>) => {
            const newData = state.items.map(item => {
                if (item.id === action.payload.id.toString()) {
                    return { ...item, quantity: action.payload.val }
                }
                else {
                    return item
                }
            })
            state.items = newData
        },
        removeItemFromCart: (state, action: PayloadAction<number>) => {
            const newData = state.items.filter(item => item.id !== action.payload.toString())
            state.items = newData
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, changeItemQuantity, removeItemFromCart } = cartSlice.actions

export default cartSlice.reducer;