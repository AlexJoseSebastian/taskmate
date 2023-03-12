import  "./App.css";
import {Navbar} from './Mycomponents/Navbar'
import { Todos } from "./Mycomponents/Todos";
import { Todoitem } from "./Mycomponents/Todoitem";

function App() {
  return (
    <div className="App">
        <Navbar title="TaskMate" task={true}/>
        <Todoitem/>
        <Todos/>
    </div>
  );
}

export default App;
