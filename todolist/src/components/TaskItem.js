import React from "react";
import todolistStore from "../stores/todolistStore";

const TaskItem = ({ item }) => {
  return (
    <div>
      <label>{item.task}</label>
      <input
        type="checkbox"
        onClick={() => todolistStore.changeStatus(item.id)}
        checked={item.status}
      />
    </div>
  );
};

export default TaskItem;
