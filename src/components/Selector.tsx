import React from "react";
import { useRecoilState } from "recoil";
import { selectedAtom } from "../recoil/atoms";
import { Movie } from "../types/movie";

interface Props {
  movie: Movie;
}
/**
 * Shows an indicator of whether a movie is selected.
 * It is clickable to change state
 */
const Selector = ({ movie }: Props) => {
  const [selectedMovies, setSelectedMovies] = useRecoilState(selectedAtom);

  const isSelected = selectedMovies.has(movie);

  return (
    <div
      className="absolute inset-0 cursor-pointer"
      onClick={() => {
        isSelected ? selectedMovies.delete(movie) : selectedMovies.add(movie);

        setSelectedMovies(selectedMovies);
      }}
    >
      {isSelected ? (
        <div className="absolute right-0 bottom-0 text-center bg-opacity-75 bg-white rounded-full h-10 w-10 m-3">
          <span className="text-green-500 text-2xl font-extrabold">✓</span>
        </div>
      ) : null}
    </div>
  );
};

export default Selector;
