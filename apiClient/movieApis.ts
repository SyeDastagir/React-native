import apiClient from "./apiClient"

export const topRatedMoviesApi = async () => {
  try {
    const response = await apiClient.get("/movie/top_rated");
    return JSON.stringify(response.data);
  } catch (error) {
    console.log("Error fetching top rated movies:", error);
    throw error;
  }
};

export const popularMoviesApi = async () => {
  try {
    const response = await apiClient.get(
      "/movie/popular");
    return JSON.stringify(response.data);
  } catch (error) {
    console.log("Error fetching popular movies:", error);
    throw error;
  }
};

export const upcomingMoviesApi = async () => {
  try {
    const response = await apiClient.get(
      "/movie/upcoming");
    return JSON.stringify(response.data);
  } catch (error) {
    console.log("Error fetching upcoming movies:", error);
    throw error;
  }
};

export const nowPlayingMoviesApi = async () => {
  try {
    const response = await apiClient.get(
      "/movie/now_playing");
    return JSON.stringify(response.data);
  } catch (error) {
    console.log("Error fetching now playing movies:", error);
    throw error;
  }
};

export const movieDetailsApi = async (movieId: string) => {
  try {
    const response = await apiClient.get(
      `/movie/${movieId}`);
    return JSON.stringify(response.data);
  } catch (error) {
    console.log("Error fetching movie details:", error);
    throw error;
  }
};

export const movieDetailApi = async (movieId: string) => {
  try {
    const response = await apiClient.get(
      `/movie/${movieId}`);
    return JSON.stringify(response.data);
  } catch (error) {
    console.log("Error fetching movie videos:", error);
    throw error;
  }
};

export const similarMoviesApi = async (movieId: string) => {
  try {
    const response = await apiClient.get(
      `/movie/${movieId}/similar`);
    return JSON.stringify(response.data);
  } catch (error) {
    console.log("Error fetching similar movies:", error);
    throw error;
  }
};

export const searchMoviesApi = async (query: string) => {
  try {
    const response = await apiClient.get(
      `/search/movie?query=${encodeURIComponent(
        query
      )}`);
    return response.data;
  } catch (error) {
    console.log("Error searching movies:", error);
    throw error;
  }
}