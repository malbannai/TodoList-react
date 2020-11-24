import React from "react";
import todolistStore from "../stores/todolistStore";
import TaskItem from "./TaskItem";
import { observer } from "mobx-react";

const TaskList = ({ state }) => {
  const filterdList = [];
  if (state) {
    filterdList.push(
      todolistStore.items
        .filter((item) => item.status === true)
        .map((item) => <TaskItem item={item} key={item.id} />)
    );
  } else {
    filterdList.push(
      todolistStore.items
        .filter((item) => item.status === false)
        .map((item) => <TaskItem item={item} key={item.id} />)
    );
  }

  return <div>{filterdList}</div>;
};

export default observer(TaskList);
