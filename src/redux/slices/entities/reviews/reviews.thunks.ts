import {createAsyncThunk} from '@reduxjs/toolkit';
import {Review} from './reviews.slice';

export const getReviewsByRestaurantId = createAsyncThunk(
    'reviews/getReviews',
    async (restaurantId: string, {rejectWithValue}) => {
        const response = await fetch(
            `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`,
        );

        const result: Review[] = await response.json();

        if (result.length === 0) {
            return rejectWithValue('no data');
        }

        return result;
    },
);
