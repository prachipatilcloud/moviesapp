import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../slice/movieslice';

export const store = configureStore({
    reducer: {
        movies: movieReducer
    }
})