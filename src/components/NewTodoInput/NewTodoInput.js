import React, { useState } from "react";
import "./NewTodoInput.css";

function NewTodoInput() {
  return (
    <div>
      <input
        type="text"
        value=""
        className="new-input"
        placeholder="write your name here"
      />
      <button>Add New Todo</button>
    </div>
  );
}

export default NewTodoInput;