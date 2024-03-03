const mapMovieData = (movie) => ({
  title: movie.title,
  overview: movie.overview,
  releaseDate: movie.release_date,
  voteAverage: movie.vote_average,
  originalLanguage: movie.original_language,
});

const apiKey = process.env.NEXT_PUBLIC_TMDB_TOKEN;
const apiUrl = process.env.NEXT_PUBLIC_TMBD_BASE_URL;

const fetchMovies = async (page) => {
  const fetchMoviesEndpoint = `${apiUrl}/3/discover/movie?api_key=${apiKey}&page=${page}`;

  try {
    const response = await fetch(fetchMoviesEndpoint);

    if (!response.ok) {
      throw new Error(`Failed to fetch data for page ${page}`);
    }

    const { results } = await response.json();

    if (results) {
      return results.map(mapMovieData);
    } else {
      console.error(`Results not found for page ${page}`);
      return [];
    }
  } catch (error) {
    console.error(`Error fetching data for page ${page}: ${error.message}`);
    return [];
  }
};

export const api = async () => {
  const renderPages = 2;
  let moviesList = [];

  for (let i = 1; i <= renderPages; i++) {
    const currentList = await fetchMovies(i);
    moviesList = [...moviesList, ...currentList];
  }

  return moviesList;
};
