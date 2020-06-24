import config from "../config.js";

const BASE_URL = "http://www.omdbapi.com/";

// GET request to the API to search for movies
export const searchMovies = (searchString: string) => {
  return fetch(BASE_URL + "?s=" + searchString + "&apikey=" + config.API_KEY);
};
