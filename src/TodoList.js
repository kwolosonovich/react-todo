import React, {useState} from "react";
import Item from './Item'

const TodoList = () => {
    const INITIAL_STATE = [
      { id: 1, name: "Shopping", date: "12/1/20" }
    ]
    const [items, setItems] = useState(INITIAL_STATE);
    return (
      <div>
        <h3>To-Do List</h3>
        <div>
          {items.map(({id, name, date}) => <Item id={id} name={name} key={id} date={date} />)}
        </div>
      </div>
    );
}

export default TodoList;