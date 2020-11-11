import React, { useState } from "react";
import Item from "./Item"
import './NewItemForm.css'
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";


// const validate = values => {
//   let errors = {};
//   if (!values.name) {
//     errors.name = "Required";
//   } else if (values.name.length < 2) {
//     errors.name = 'Invalid length'
//   }
//   return errors;
// }

const NewItemForm = ({addItem}) => {  // pass in newForm function from parent
  
  const INITIAL_STATE = {
      name: "",
      date: ""
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
    <div>
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
        <button>Add</button>
      </form>
    </div>
  );

};

export default NewItemForm;
