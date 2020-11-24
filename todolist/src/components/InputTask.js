import React from "react";
import { useState } from "react";
import todolistStore from "../stores/todolistStore";

const InputTask = () => {
  const [task, setTask] = useState({
    id: 0,
    task: "",
    status: false,
    priority: "Low",
  });

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    todolistStore.addTask(task);
    // console.log(task);
  };

  return (
    <div>
      <input
        name="task"
        placeholder="Enter the Task ..."
        onChange={handleChange}
        type="text"
      />
      <select name="priority" onChange={handleChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={handleSubmit}>Add New Task</button>
    </div>
  );
};

export default InputTask;
