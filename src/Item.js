import React, { useState } from "react";
import TodoList from './TodoList'
import './Item.css'

const Item = ({ id, name, date, updateItem, handleRemove }) => {
  // remove item
  const remove = () => handleRemove(id);

  // update edit state
  const [editItem, setEditItem] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  // update item
  const update = (evt) => updateItem(evt.target.value);

  // toggle edit status
  const toggleEdit = () => {
    setIsEditing((edit) => !edit);
  };
  const handleChange = (evt) => {
    setEditItem(evt.target.value);
  };

  const handleUpdate = (evt) => {
    evt.preventDefault();
    update(id, editItem);
    setIsEditing(false);
  };

  // form display
  let form = (
    <div>
      <ul>
        <li>
          {"To-Do:"} {name}
        </li>
        <li>Due By: {date} </li>
        <button onClick={toggleEdit}>Edit</button>
        <button onClick={remove}>X</button>
      </ul>
    </div>
  );
  
  // edit form display
  let editForm = (
      <div>
        <ul>
          <li>
            {"To-Do:"} {name}
          </li>
          <li>Due By: {date} </li>
          <button onClick={editItem}>Edit</button>
          <button onClick={remove}>X</button>
        </ul>
      </div>
    );

  return (isEditing ? form : editForm)
};

export default Item;