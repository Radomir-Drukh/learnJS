import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {getDish, getDishesByRestaurantId} from './dishes.thunks';

export interface Dish {
    id: string;
    name: string;
    price: number;
    ingredients: string[];
}

const entityAdapter = createEntityAdapter<Dish>();

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState: entityAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDishesByRestaurantId.fulfilled, (state, {payload: dishes}) =>
                entityAdapter.upsertMany(state, dishes),
            )
            .addCase(getDish.fulfilled, (state, {payload: dish}) =>
                entityAdapter.upsertOne(state, dish),
            );
    },
});
