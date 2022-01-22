

function List ({todos}) {
    return (
        <div>
        <ul> 
            {todos.map(todo => {
                    return (
                    <li>
                        {todo.id} - {todo.title} - {todo.isDone}

                    </li>
                    )
                }) 
            }
        </ul>
        </div>
        )};


export default List