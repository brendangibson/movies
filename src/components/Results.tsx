import React from "react";
import MovieDisplay from "./MovieDisplay";
import { searchStringAtom, movieSearchQuerySelector } from "../recoil/atoms";
import { useRecoilValue } from "recoil";
import { Movie } from "../types/movie";

/**
 * Shows the search results
 */
const Content = () => {
  const searchString = useRecoilValue<string>(searchStringAtom);

  // Makes the request to get movie results
  const movieSearchQuery = useRecoilValue(
    movieSearchQuerySelector(searchString)
  );

  const results = movieSearchQuery?.Search;

  return (
    <>
      <h3 className="text-gray-200">
        {results
          ? "Click on a movie to add it to your cart"
          : "Type more letters to get search results"}
      </h3>
      <div className="flex flex-row flex-wrap justify-around">
        {results?.map((movie: Movie) => (
          <MovieDisplay movie={movie} key={movie.imdbID} />
        ))}
      </div>
    </>
  );
};

export default Content;
