import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../api/movies";
import MovieCard from "../../components/MovieCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { getMoviesBySearch } from "../../utils/getMoviesBySearch";

const Home = () => {
  const dispatch = useDispatch();

  const { movies, searchValue } = useSelector((state) => state.movies);

  const filterByMovieName = getMoviesBySearch(movies, searchValue);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Box sx={{ flexGrow: 1, marginTop: 2 }}>
        <Grid container spacing={2}>
          {filterByMovieName?.length > 0 &&
            filterByMovieName.map((movie, index) => (
              <Grid key={movie.imdbID || index} size={4}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
