import React, { useState } from "react";
import TodoList from './TodoList'

const Item = ({id, name, date}) => {
    return (
        <div>
            <ul> 
                <li>{"To-Do:"}{" "}{name}</li>
                <li>Due By: {date} </li>
            </ul>
        </div>
    );
}

export default Item;