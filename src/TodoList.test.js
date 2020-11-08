import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";


test("renders without crashing", () => {
  render(<TodoList />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

test("add new todo item", () => {
  const {queryByText, getByLabelText} = render(<TodoList />)
  const input = getByLabelText("To-Do")
  const btn = queryByText('Add');
  expect(queryByText('Baking')).not.toBeInTheDocument();
  fireEvent.change(input, {target: {name: 'Baking'}})
  firstEvent.click(btn);
  expect(queryByText('To-Do: Baking')).toBeInTheDocument();
})

