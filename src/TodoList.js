import React, {useState} from "react";
import Item from './Item';
import NewItemForm from "./NewItemForm";
import {v4 as uuid} from "uuid";

const TodoList = () => {
    // initial state
    const [items, setItems] = useState([]);

    const addItem = (newItem) => {
      setItems(items => [...items, {...newItem, id: uuid() }]) // form data object spread into new obj, with id added
    }
    
    return (
      <div>
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