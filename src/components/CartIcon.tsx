import React from "react";
import { useRecoilValue } from "recoil";
import { selectedAtom, cartOpenAtom } from "../recoil/atoms";
import { useSetRecoilState } from "recoil";
/**
 * Shows a cart icon with a badge for the number of selected movies
 */
const CartIcon = () => {
  const selectedMovies = useRecoilValue(selectedAtom);
  const setCartOpen = useSetRecoilState(cartOpenAtom);

  return (
    <div
      className="self-end relative cursor-pointer ml-auto text-4xl"
      onClick={() => setCartOpen(true)}
    >
      <span role="img" aria-label="cart">
        🛒
      </span>
      {selectedMovies.size ? (
        <div
          data-test="size"
          className="absolute rounded-full h-8 w-8 bg-red-600 absolute top-0 right-0 text-center text-xl"
        >
          {selectedMovies.size}
        </div>
      ) : null}
    </div>
  );
};

export default CartIcon;
