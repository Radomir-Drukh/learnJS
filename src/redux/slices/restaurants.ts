import {createSlice} from '@reduxjs/toolkit';
import {normalizedRestaurants} from '../../constants/normalized-mock';
import {createInitialSliceState} from './utils';

export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: createInitialSliceState(normalizedRestaurants),
    reducers: {},
});
