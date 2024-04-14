import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {getReviewsByRestaurantId} from './reviews.thunks';

export interface Review {
    id: string;
    userId: string;
    text: string;
    rating: number;
}

const entityAdapter = createEntityAdapter<Review>();

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: entityAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getReviewsByRestaurantId.fulfilled, (state, {payload: reviews}) =>
            entityAdapter.upsertMany(state, reviews),
        );
    },
});
