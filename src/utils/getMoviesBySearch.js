export const getMoviesBySearch = (movies, value) => {
  if (!value?.length) return movies; // if search is empty, return all movies

  return movies.filter(movie =>
    movie?.Title?.toLowerCase().includes(value.toLowerCase()) ||
    movie?.Director?.toLowerCase().includes(value.toLowerCase()) ||
    movie?.Writer?.toLowerCase().includes(value.toLowerCase())
  );
};
