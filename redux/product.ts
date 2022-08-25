import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from 'types'

export interface CounterState {
    product: Product[]
}

const initialState: CounterState = {
    product: []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        increment: (state) => {
        },
        decrement: (state) => {
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = productSlice.actions

export default productSlice.reducer;