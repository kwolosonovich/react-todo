import React, { useState } from "react";
// import TodoList from './TodoList'
import './Item.css'

const Item = ({ id, name, date, updateItem, handleRemove }) => {
  // remove item
  const remove = () => handleRemove(id);

  // update edit state
  const [editItem, setEditItem] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  // toggle edit status
  const toggleEdit = () => {
    setIsEditing((edit) => !edit);
  };

  const handleChange = (evt) => {
    let updated = evt.target.value;
    console.log(updated)
    setEditItem(updated);
  };;

  const handleUpdate = (evt) => {
    evt.preventDefault();
    updateItem(id, evt.target.parentElement.firstElementChild.value);
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
      <form>
        <input type="text" name="updated" />
        <button onClick={handleUpdate}>Update</button>
        <button onClick={remove}>X</button>
      </form>
    </div>
  );

  return (isEditing ? editForm : form)
};

export default Item;