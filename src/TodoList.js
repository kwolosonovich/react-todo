import React, {useState} from "react";
import Item from './Item';
import NewItemForm from "./NewItemForm";
import {v4 as uuid} from "uuid";

const TodoList = () => {
  // initial state
  const [items, setItems] = useState([]);

  // add to-do item
  const addItem = (newItem) => {
    setItems((items) => [...items, { ...newItem, id: uuid() }]); // form data object spread into new obj, with id added
  };
  
  // update to-do item
  const updateItem = (id, updatedItem) => {
    // console.log(id)
    // console.log(updateItem);

    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              name: updatedItem,
            }
          : item
      )
    );
  };

  // delete box
  const remove = (id) => {
    setItems((item) => item.filter((item) => item.id !== id));
  };

  return (
    <div>
      {/* form with addItem function passed as prop */}
      <NewItemForm addItem={addItem} />
      <div>
        {items.map(({ id, name, date }) => (
          <Item
            id={id}
            name={name}
            key={id}
            date={date}
            updateItem={updateItem}
            handleRemove={remove}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;