import {createAsyncThunk} from '@reduxjs/toolkit';
import {User} from './users.slice';
import {RootState} from '../../../store';

export const getUsers = createAsyncThunk(
    'users/getUserById',
    async (_, {rejectWithValue}) => {
        const response = await fetch(`http://localhost:3001/api/users`);

        const result: User[] = await response.json();

        if (result.length === 0) {
            return rejectWithValue('no data');
        }

        return result;
    },
    {
        condition: (_, {getState}) => !(getState() as RootState).users.ids.length,
    },
);
