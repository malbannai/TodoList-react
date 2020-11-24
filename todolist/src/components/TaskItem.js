import React from "react";
import todolistStore from "../stores/todolistStore";
import { observer } from "mobx-react";

const TaskItem = ({ item }) => {
  return (
    <div>
      <label>{item.task}</label>
      <input
        type="checkbox"
        onClick={() => todolistStore.changeStatus(item.id)}
        checked={item.status}
      />
      <button onClick={() => todolistStore.deleteTask(item.id)}>Delete</button>
      <label onClick={() => todolistStore.changePriortiy(item.id)}>
        {item.priority}
      </label>
    </div>
  );
};

export default observer(TaskItem);
