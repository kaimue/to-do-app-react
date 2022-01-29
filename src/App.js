
import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import EditTodo from './components/EditTodo/EditTodo';
import NewTodoInput from './components/NewTodoInput/NewTodoInput';


const todoItems = [
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
  const deleteTodoById = () => {
    console.log("App deleted!");

    // Grab the id
    // Remove the id from todosData array
  };

  return (
    <div className="App">  
    <Header />
    <Form />
    <List todos = {todoItems} deleteCallback={deleteTodoById}/>
    <Footer />
    </div>
  )
};

export default App;


