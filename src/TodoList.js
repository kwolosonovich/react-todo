import React, {useState} from "react";
import Item from './Item';
import NewItemForm from "./NewItemForm";
import {v4 as uuid} from "uuid";

const TodoList = () => {
    const INITIAL_STATE = [
      { id: 1, name: "Shopping", date: "12/1/20" }
    ]
    const [items, setItems] = useState(INITIAL_STATE);
    const addItem = (newItem) => {
      setItems(items => [...items, {...newItem, id: uuid() }]) // form data object spread into new obj, with id added
    }
    return (
      <div>
        <h3>To-Do List</h3>
        {/* form with addItem function passed as prop */}
        <NewItemForm addItem={addItem}/>
        <div>
          {items.map(({ id, name, date }) => (
            <Item id={id} name={name} key={id} date={date} />
          ))}
        </div>
      </div>
    );
}

export default TodoList;