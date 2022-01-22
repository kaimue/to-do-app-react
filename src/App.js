
import './App.css';
import Header from './components/Header/Header'
import List from './components/List/List'
import Form from './components/Form/Form';


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
  return (
    <div className="App">  
    <Header />
    <Form />
    <List todos = {todoItems}/>
    </div>
  )
};

export default App;


