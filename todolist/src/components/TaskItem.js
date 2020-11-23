import React from "react";

const TaskItem = ({ item }) => {
  return (
    <div>
      <h3>{item.task}</h3>
    </div>
  );
};

export default TaskItem;
