import React, { ReactElement } from "react";
import Modal from "./Modal";
import MovieDisplay from "./MovieDisplay";
import { cartOpenAtom, selectedAtom } from "../recoil/atoms";
import { useRecoilState, useRecoilValue } from "recoil";

/**
 * Shows the movies that the user has selected in a modal
 */
const Cart = () => {
  const [cartOpen, setCartOpen] = useRecoilState(cartOpenAtom);
  const selected = useRecoilValue(selectedAtom);

  const boxArts: ReactElement[] = [];
  selected.forEach((movie) =>
    boxArts.push(
      <MovieDisplay
        movie={movie}
        key={movie.imdbID}
        size="small"
        selectable={false}
      />
    )
  );

  return (
    <Modal open={cartOpen} onClose={() => setCartOpen(false)}>
      <h2 className="text-3xl">Cart</h2>
      <div className="flex flex-wrap">{boxArts}</div>
      <p>Click to dismiss</p>
    </Modal>
  );
};

export default Cart;
