import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../redux/product';
import cartReducer from '../redux/cart';
export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch