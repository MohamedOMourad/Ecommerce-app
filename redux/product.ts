import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from 'types'

export interface ProductState {
    products: Product[]
}

const initialState: ProductState = {
    products: [],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getAllProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { getAllProducts } = productSlice.actions

export default productSlice.reducer;