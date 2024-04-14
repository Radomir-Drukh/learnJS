import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {getRestaurants} from './restaurants.thunks';

export interface Restaurant {
    id: string;
    name: string;
    menu: string[];
    reviews: string[];
}

const entityAdapter = createEntityAdapter<Restaurant>();

export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: entityAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getRestaurants.fulfilled, (state, {payload: headphones}) =>
            entityAdapter.setAll(state, headphones),
        );
    },
});
