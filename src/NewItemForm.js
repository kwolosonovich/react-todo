import React, { useState } from "react";
import Item from "./Item"

const NewItemForm = ({addItem}) => {  // pass in newForm function from parent
  
  const INITIAL_STATE = {
      name: "",
      data: ""
  }

  const [formData, setFormData] = useState(INITIAL_STATE)  // form state is local to form, values are passed up to parent 
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  // handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({...formData}) // update the parent state with formData obj
    setFormData(INITIAL_STATE) // reset form after submit
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">To-Do: </label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Add"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="date">Due By: </label>
      <input
        id="date"
        type="text"
        name="date"
        placeholder="Date"
        value={formData.date}
        onChange={handleChange}
      />
      {/* test if form is working by rendering input text */}
      {/* <p>{formData.name}</p>
      <p>{formData.date}</p> */}
      <button>Add</button>
    </form>
  );

};

export default NewItemForm;
