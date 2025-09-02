import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    genres: [],
    ratings: [],
    searchValue: ''
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        setGenres: (state, action) => {
            state.genres = action.payload;
        },
        setRatings: (state, action) => {
            state.ratings = action.payload;
        }
    }
});

export const { setMovies, setSearchValue, setGenres, setRatings } = movieSlice.actions;

export default movieSlice.reducer;