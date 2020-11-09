import React from "react";
import './App.css';
import TodoList from './TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        To-Do List
      </header>
      <TodoList />
    </div>
  );
}

export default App;
