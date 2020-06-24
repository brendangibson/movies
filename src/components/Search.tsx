import React from "react";
import { searchStringAtom } from "../recoil/atoms";
import { useSetRecoilState } from "recoil";

/**
 * Search box
 * Updates recoil state when the input changes, which will force a request called in `Results`
 */
const Search = () => {
  const setSearchString = useSetRecoilState(searchStringAtom);
  return (
    <div className="shadow flex rounded bg-white">
      <input
        className="w-full p-2 rounded"
        type="text"
        placeholder="Search for a movie..."
        onChange={(e) => setSearchString(e.target.value)}
      />
      <span role="img" aria-label="search" className="text-3xl">
        🔎
      </span>
    </div>
  );
};

export default Search;
