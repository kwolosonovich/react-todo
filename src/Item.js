import React, { useState } from "react";
import TodoList from './TodoList'
import './Item.css'

const Item = ({ id, name, date, updateItem, handleRemove }) => {
  // update item
  const update = (evt) => updateItem(evt.target.value);
  // remove item
  const remove = () => handleRemove(id);
  // edit item
  // const toggleEdit = () => {
  //   setIsEditing((edit) => !edit);
  // };

  return (
    <div>
      <ul>
        <li>
          {"To-Do:"} {name}
        </li>
        <li>Due By: {date} </li>
        <button onClick={update}>Edit</button>
        <button onClick={remove}>X</button>
      </ul>
    </div>
  );

};

export default Item;