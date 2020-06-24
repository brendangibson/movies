import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Cart from "./components/Cart";

import { RecoilRoot } from "recoil";

/**
 * Entry point for the application
 */
const App = () => {
  return (
    <RecoilRoot>
      <Header />

      <div className="p-2">
        <Content />
        <Cart />
      </div>
    </RecoilRoot>
  );
};

export default App;
