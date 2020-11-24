import "./App.css";
import TaskList from "./components/TaskList";
import InputTask from "./components/InputTask";
function App() {
  return (
    <>
      <InputTask />
      <h2>My Tasks</h2>
      <TaskList state={false} />
      <h2>My Done Tasks</h2>
      <TaskList state={true} />
    </>
  );
}

export default App;
