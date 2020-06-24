import React from "react";
import CartIcon from "./CartIcon";
import { shallow, mount } from "enzyme";
import * as recoil from "recoil";

const movies = new Set();
movies.add({
  Title: "Dude, Where is my car",
  imdbID: "1222",
  Poster: "",
});

jest.spyOn(recoil, "useRecoilValue").mockImplementation(() => {
  return movies;
});

describe("<CartIcon />", () => {
  it("renders", () => {
    const rendered = shallow(
      <recoil.RecoilRoot>
        <CartIcon />
      </recoil.RecoilRoot>
    );
    expect(rendered.length).toBe(1);
  });
  it("shows number of selected movies", () => {
    const movies = new Set();
    movies.add({
      Title: "Dude, Where is my car",
      imdbID: "1222",
      Poster: "",
    });

    movies.add({
      Title: "Honey, I shrunk the Kids",
      imdbID: "433",
      Poster: "",
    });

    jest.spyOn(recoil, "useRecoilValue").mockImplementation(() => {
      return movies;
    });

    const rendered = mount(
      <recoil.RecoilRoot>
        <CartIcon />
      </recoil.RecoilRoot>
    );

    expect(rendered.find('[data-test="size"]').children().html()).toEqual(
      movies.size.toString()
    );
  });
  it("does not show badge when no movies are selected", () => {
    const movies = new Set();

    jest.spyOn(recoil, "useRecoilValue").mockImplementation(() => {
      return movies;
    });

    const rendered = mount(
      <recoil.RecoilRoot>
        <CartIcon />
      </recoil.RecoilRoot>
    );

    expect(rendered.find('[data-test="size"]').length).toEqual(0);
  });
});
