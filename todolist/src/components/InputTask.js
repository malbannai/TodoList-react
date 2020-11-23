import React from "react";
import { useState } from "react";
import todolistStore from "../stores/todolistStore";

const InputTask = () => {
  const [task, setTask] = useState({
    id: 0,
    task: "",
    status: false,
    priority: "",
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
      <input
        name="priority"
        placeholder="Enter the Priority ..."
        onChange={handleChange}
        type="text"
      />
      <button onClick={handleSubmit}>Add New Task</button>
    </div>
  );
};

export default InputTask;
