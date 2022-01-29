
import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import Footer from './components/Footer/Footer';
import EditTodo from './components/EditTodo/EditTodo';
import NewTodoInput from './components/NewTodoInput/NewTodoInput';
import { useState } from 'react';
import { newTodo } from './components/NewTodoInput/NewTodoInput';



const TODOS = [
  {
    id:"12398745",
    title:"groceries",
    isDone:true
  },
  {
    id:"3457860",
    title:"laundry",
    isDone: false
  },
  {
    id:"5678990",
    title: "meet friends",
    isDone: true
  }
];


function App() {

  const [todoItems, setTodoItems] = useState(TODOS);

  const addNewTodo = () => {
    console.log('test', NewTodo)
    //TODOS.push
  }

  const deleteTodoById = (id) => {

    console.log("App deleted!");
    console.log(id);
    const removeItem = todoItems.filter((todo) => {
      return todo.id !== id;
    });
    console.log(removeItem);
    //const newList = removeItem
    setTodoItems(removeItem);
  } 


  


      
     // if (todo.id !
     //const removeIndex = todoItems.findIndex( item => item.id === 37 );
     // remove object
     //todoItems.splice( removeIndex, 1 );

    // Grab the id
    // Remove the id from todosData array

  return (
    <div className="App">  
    <Header />
    <NewTodoInput addTodo={addNewTodo}/>
    <List todos={todoItems} addTodo={addNewTodo} deleteCallback={deleteTodoById}/>
    <Footer />
    </div>
  )
};

export default App;



