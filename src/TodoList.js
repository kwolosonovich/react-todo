import React, {useState} from "react";
import Item from './Item'
import NewItemForm from "./NewItemForm";

const TodoList = () => {
    const INITIAL_STATE = [
      { id: 1, name: "Shopping", date: "12/1/20" }
    ]
    const [items, setItems] = useState(INITIAL_STATE);
    const addItem = (name, date) => {
      setItems(items => [...items, {name, date}])
    }
    return (
      <div>
        <h3>To-Do List</h3>
        <NewItemForm />
        <div>
          {items.map(({id, name, date}) => <Item id={id} name={name} key={id} date={date} />)}
        </div>
      </div>
    );
}

export default TodoList;