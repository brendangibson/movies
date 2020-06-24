import { atom, selectorFamily } from "recoil";
import { searchMovies } from "../services/search";
import { Movie } from "../types/movie";

/**
 * All recoil functions
 */

export const movieSearchQuerySelector = selectorFamily({
  key: "movieSearch",

  // Make a request to the server to search for movies with the search string
  get: (searchString: string) => async ({ get }) => {
    if (searchString) {
      const response = await searchMovies(searchString);
      if (response.ok) {
        const results = response.json();
        return results;
      }
      throw new Error(response.statusText);
    }
  },
});

// Stores the currently input search string
export const searchStringAtom = atom({
  key: "searchStringAtom",
  default: "",
});

// Set of selected movies
export const selectedAtom = atom({
  key: "selected",
  default: new Set<Movie>(),
});

// Toggle for the cart modal
export const cartOpenAtom = atom({
  key: "cartOpen",
  default: false,
});
