import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {getUsers} from './users.thunk';

export interface User {
    id: string;
    name: string;
}
const entityAdapter = createEntityAdapter<User>();

export const usersSlice = createSlice({
    name: 'users',
    initialState: entityAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, {payload: reviews}) =>
            entityAdapter.upsertMany(state, reviews),
        );
    },
});
