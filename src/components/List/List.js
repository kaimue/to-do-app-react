import React from "react";
import Todo from "../Todo/Todo";

function List ({todos, deleteCallback}) {
    return (
        <div>
        <ul> 
            {todos.map((todo, index) => {
                    return (
                    <li>
                        <Todo key={index} id={todo.id} title={todo.title} isDone={todo.isDone} deleteCallback={deleteCallback}/>

                    </li>
                    )
                }) 
            }
        </ul>
        </div>
        )};


export default List