import React from "react";
import BoxArt from "./BoxArt";
import Selector from "./Selector";
import { Movie } from "../types/movie";
import classnames from "classnames";

interface Props {
  movie: Movie;
  size?: "small" | "large";
  selectable?: boolean;
}

/**
 * Displays a movie and a clickable area to select it
 */
const MovieDisplay = ({ movie, size = "large", selectable = true }: Props) => {
  const isSmall = size === "small";
  return (
    <div
      className={classnames(
        "relative p-1 min-h-40",
        { "w-32 md:w-64": !isSmall },
        { "w-16 md:w-32": isSmall }
      )}
    >
      <BoxArt title={movie.Title} url={movie.Poster} />
      {selectable ? <Selector movie={movie} /> : null}
    </div>
  );
};

export default MovieDisplay;
