import {createSlice} from '@reduxjs/toolkit';
import {normalizedDishes} from '../../constants/normalized-mock';
import {createInitialSliceState} from './utils';

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState: createInitialSliceState(normalizedDishes),
    reducers: {},
});
