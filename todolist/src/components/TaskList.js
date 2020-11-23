import React from "react";
import todolistStore from "../stores/todolistStore";
import TaskItem from "./TaskItem";
import { observer } from "mobx-react";

const TaskList = () => {
  const list = todolistStore.items.map((item) => (
    <TaskItem item={item} key={item.id} />
  ));
  return <div>{list}</div>;
};

export default observer(TaskList);
