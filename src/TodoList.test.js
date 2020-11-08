import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./TodoList";


test("renders without crashing", () => {
  render(<TodoList />);
});

// test("matches snapshot", () => {
//   const { asFragment } = render(<TodoList />);
//   expect(asFragmnet()).toMatchSnapshot();
// });
