import  "./App.css";
import {Navbar} from './Mycomponents/Navbar'
import { Todos } from "./Mycomponents/Todos";
import { TodoItem } from "./Mycomponents/TodoItem";

function App() {
   let todos=[
    {
      sno:1,
      title:"go to the market",
      desc:"YOu need to go the market to get this job done"
    },
    {
      sno:2,
      title:"go to the saloon",
      desc:"YOu need to go the market to get this job done"
    },
    {
      sno:3,
      title:"go to the playground",
      desc:"YOu need to go the market to get this job done"
    },
   ]
  return (
    <div className="App">
        <Navbar title="TaskMate" task={true}/>
        <TodoItem/>
        <Todos todos={todos}/>
    </div>
  );
}

export default App;
