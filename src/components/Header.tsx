import React from "react";
import Search from "./Search";
import CartIcon from "./CartIcon";

/**
 * Fixed box at the top of the screen containing the search box and the cart link
 */
const Header = () => (
  <>
    <header className="flex flex-row h-16 fixed bg-gray-800 w-full p-2 z-50">
      <Search />
      <CartIcon />
    </header>
    {/* To create space behind the fixed header */}
    <div className="h-16" />
  </>
);

export default Header;
