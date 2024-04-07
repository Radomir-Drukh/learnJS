import {combineSlices, configureStore} from '@reduxjs/toolkit';
import {dishesSlice, restaurantsSlice, reviewsSlice, usersSlice} from './slices';

export const store = configureStore({
    reducer: combineSlices(reviewsSlice, dishesSlice, restaurantsSlice, usersSlice),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
