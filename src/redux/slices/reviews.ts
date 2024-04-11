import {createSlice} from '@reduxjs/toolkit';
import {createInitialSliceState} from './utils';
import {normalizedReviews} from '../../constants/normalized-mock';

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: createInitialSliceState(normalizedReviews),
    reducers: {},
});
