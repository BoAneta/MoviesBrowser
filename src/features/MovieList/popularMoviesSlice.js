import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    popularMoviesList: null,
    status: "null",
  },

  reducers: {
    fetchPopularMovies: () => ({
      status: "loading",
      popularMoviesList: null,
    }),
    fetchPopularMoviesSuccess: (_, { payload: popularMoviesList }) => ({
      status: "success",
      popularMoviesList,
      page: popularMoviesList.page,
    }),
    fetchPopularMoviesError: () => ({
      status: "error",
      popularMoviesList: null,
    }),
  },
});

export const {
  fetchPopularMovies,
  fetchPopularMoviesError,
  fetchPopularMoviesSuccess,
} = popularMoviesSlice.actions;

export const selectStatePopularMovies = (state) => state.popularMovies;
export const selectPopularMoviesStatus = (state) =>
  selectStatePopularMovies(state).status;
export const selectPopularMoviesList = (state) =>
  selectStatePopularMovies(state).popularMoviesList;

export default popularMoviesSlice.reducer;
