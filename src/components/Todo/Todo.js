import React from "react";

function Todo({ title, deleteCallback }) {
    const handleDelete = () => {
      console.log("delete from todo");
  
      deleteCallback();
    };
  
    return (
      <div>
        <li>
          <p>{title}</p>
          <button onClick={handleDelete}>delete item</button>
          <button>edit item</button>
        </li>
      </div>
    );
  }

export default Todo