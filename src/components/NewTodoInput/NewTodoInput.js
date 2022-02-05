import React, { useState } from "react";
import Todo from "../Todo/Todo";



function NewTodoInput( {addTodo}, todoItems) { 
  const [inputValue, setInputValue] = useState('');
  const handleChange = ( { target } ) => {
      const updatedInput = target.value
      setInputValue(updatedInput)
  }
  
  const handleSubmit = (event) => {
      event.preventDefault()
      //console.log(event)
      //console.log(event.target[0].value)
      const newTodo = {
        id: (Date.now() + Math.random()).toString(),
        title: event.target[0].value, 
        isDone: false
      };
      console.log(newTodo)

      addTodo(newTodo);

  };

  return (
    <form  onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        value={inputValue}
        className="new-input"
        placeholder="write your name here"
      />
      <button>Add New Todo</button>
    </form>
    

  );
}

export default NewTodoInput;