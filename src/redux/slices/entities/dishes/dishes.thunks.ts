import {createAsyncThunk} from '@reduxjs/toolkit';
import {Dish} from './dishes.slice';
import {RootState} from '../../../store';

export const getDishesByRestaurantId = createAsyncThunk(
    'dishes/getDishes',
    async (restaurantId: string, {rejectWithValue}) => {
        const response = await fetch(
            `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`,
        );
        const result: Dish[] = await response.json();

        if (result.length === 0) {
            return rejectWithValue('no data');
        }

        return result;
    },
);

export const getDish = createAsyncThunk(
    'dishes/getDish',
    async (dishId: string, {rejectWithValue}) => {
        const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
        const result: Dish = await response.json();

        if (!result) {
            return rejectWithValue('no data');
        }

        return result;
    },
    {
        condition: (dishId: string, {getState}) =>
            !(getState() as RootState).dishes.ids.includes(dishId),
    },
);
