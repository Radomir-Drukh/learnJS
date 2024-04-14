import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {} as Record<string, number>,
    reducers: {
        incrementProduct: (state, {payload: id}) => {
            const product = state[id] || 0;

            state[id] = product + 1;
        },
        decrementProduct: (state, {payload: id}) => {
            state[id] = (state[id] || 0) - 1;

            if (state[id] <= 0) {
                delete state[id];
            }
        },
    },
});

export const selectCartModule = (state: RootState) => state.cart;

export const selectCartProductIds = (state: RootState) => Object.keys(selectCartModule(state));

export const selectProductAmount = (state: RootState, productId: string) =>
    selectCartModule(state)[productId] || 0;

export const {incrementProduct, decrementProduct} = cartSlice.actions;
