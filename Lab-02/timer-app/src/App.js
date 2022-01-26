import Form from "./components/Form";
import TodoList from "./components/todoList/TodoList";
import "./App.css";
import { ContextProvider } from "./components/context/todoContext";
import FormView from "./components/FormView";



function App() {

  return (
     <ContextProvider>

      <div className="App">
        <h1 className="app_title">Timers</h1>
        <TodoList />
        <FormView/>
      </div>
      </ContextProvider>
  );
}

export default App;
