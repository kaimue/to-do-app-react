

function List ({todos}) {
    return (
        <div>
        <ul> 
            {todos.map((todo, index) => {
                    return (
                    <li>
                        <Todo key={index} id={todo.id} title={todo.title} isDone={todo.isDone} />

                    </li>
                    )
                }) 
            }
        </ul>
        </div>
        )};


export default List