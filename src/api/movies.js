import axios from "axios";
import { setGenres, setMovies, setRatings } from "../slice/movieslice";

const BaseURL = "/movies.json";

// ✅ fetch all movies
export const getMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(BaseURL);
    dispatch(setMovies(response.data));
    return response.data;
  } catch (err) {
    console.error("Error fetching movies:", err);
    return err;
  }
};

// ✅ search = filter locally
export const getMoviesBySearch = (value) => async (dispatch, getState) => {
  try {
    const { movies } = getState().movies;

    let allMovies = movies;
    if (!allMovies || allMovies.length === 0) {
      const res = await axios.get(BaseURL);
      allMovies = res.data;
    }

    const filtered =
      value?.length > 0
        ? allMovies.filter(
          (movie) =>
            movie.Title?.toLowerCase().includes(value.toLowerCase()) ||
            movie.Director?.toLowerCase().includes(value.toLowerCase()) ||
            movie.Writer?.toLowerCase().includes(value.toLowerCase())
        )
        : allMovies;

    dispatch(setMovies(filtered));
    return filtered;
  } catch (err) {
    console.error("Error filtering movies:", err);
    return err;
  }
};

// ✅ extract all unique genres from movies.json
export const getAllGenres = () => async (dispatch) => {
  try {
    const { data } = await axios.get(BaseURL);

    let genres = [];
    data.forEach((movie) => {
      if (movie.Genre) {
        const movieGenres = movie.Genre.split(",").map((g) => g.trim());
        genres.push(...movieGenres);
      }
    });

    const uniqueGenres = [...new Set(genres)];
    dispatch(setGenres(uniqueGenres));
  } catch (err) {
    console.error("Error fetching genres:", err);
  }
};

export const getMoviesByGenre = (genre) => async (dispatch, getState) => {
  try {
    const { movies } = getState().movies;

    let allMovies = movies;
    if (!allMovies || allMovies.length === 0) {
      const res = await axios.get(BaseURL);
      allMovies = res.data;
    }

    const filtered =
      genre && genre.length > 0
        ? allMovies.filter((movie) =>
          movie.Genre?.toLowerCase().includes(genre.toLowerCase())
        )
        : allMovies;

    dispatch(setMovies(filtered));
    return filtered;
  } catch (err) {
    console.error("Error filtering movies by genre:", err);
    return err;
  }
};

// ✅ extract all unique ratings from movies.json
export const getAllRatings = () => async (dispatch) => {
  try {
    const { data } = await axios.get(BaseURL);

    let ratings = [];
    data.forEach((movie) => {
      if (movie.imdbRating) {
        ratings.push(movie.imdbRating.toString()); // store as string
      }
    });

    const uniqueRatings = [...new Set(ratings)];
    dispatch(setRatings(uniqueRatings));
  } catch (err) {
    console.error("Error fetching ratings:", err);
  }
};

// ✅ filter movies by rating
export const getMoviesByRating = (rating) => async (dispatch, getState) => {
  try {
    const { movies } = getState().movies;

    let allMovies = movies;
    if (!allMovies || allMovies.length === 0) {
      const res = await axios.get(BaseURL);
      allMovies = res.data;
    }

    const filtered =
      rating && rating.length > 0
        ? allMovies.filter(
          (movie) => movie.imdbRating?.toString() === rating.toString()
        )
        : allMovies;


    dispatch(setMovies(filtered));
    return filtered;
  } catch (err) {
    console.error("Error filtering movies by rating:", err);
    return err;
  }
};
