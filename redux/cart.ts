import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CartItem, Product } from 'types'
import { getFromStorage, setToStorage } from 'utils/Function'

const initialState: { items: CartItem[] } = getFromStorage('cart')

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const selectedItem = state.items.find((item: CartItem) => item.id === action.payload.id);
            if (selectedItem) {
                state.items = state.items.map((item: CartItem) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: action.payload.quantity }
                    } else {
                        return item
                    }
                })
            } else {
                state.items = [...state.items, action.payload]
            }
            setToStorage('cart', state)
        },
        removeItemFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
            setToStorage('cart', state)
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeItemFromCart } = cartSlice.actions

export default cartSlice.reducer;