import {createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from '../../../store';
import {Restaurant} from './restaurants.slice';

export const getRestaurants = createAsyncThunk(
    'restaurants/getRestaurants',
    async (_, {rejectWithValue}) => {
        const response = await fetch('http://localhost:3001/api/restaurants');
        const result: Restaurant[] = await response.json();

        if (result.length === 0) {
            return rejectWithValue('no data');
        }

        return result;
    },
    {
        condition: (_, {getState}) => !(getState() as RootState).restaurants.ids.length,
    },
);
