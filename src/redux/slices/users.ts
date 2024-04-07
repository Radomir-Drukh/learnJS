import {createSlice} from '@reduxjs/toolkit';
import {createInitialSliceState} from './utils';
import {normalizedUsers} from '../../constants/normalized-mock';

export const usersSlice = createSlice({
    name: 'users',
    initialState: createInitialSliceState(normalizedUsers),
    reducers: {},
});
