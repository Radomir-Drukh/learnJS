import {combineSlices, configureStore, createEntityAdapter} from '@reduxjs/toolkit';
import {dishesSlice, restaurantsSlice, reviewsSlice, usersSlice} from './slices/entities';
import {cartSlice} from './slices/ui/cart';

export const store = configureStore({
    reducer: combineSlices(reviewsSlice, dishesSlice, restaurantsSlice, usersSlice, cartSlice),
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
