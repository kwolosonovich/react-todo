import React from "react";
import { render } from "@testing-library/react";
import Item from "./Item";

test("renders without crashing", () => {
  render(<Item />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<Item />);
  expect(asFragment()).toMatchSnapshot();
});
