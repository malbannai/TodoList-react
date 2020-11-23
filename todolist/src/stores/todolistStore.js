import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class ToDoListStore {
  items = [];

  constructor() {
    makeObservable(this, {
      items: observable,
      fetchToDo: action,
    });
  }

  fetchToDo = async () => {
    try {
      const response = await axios.get("http://localhost:8000/");
      this.items = response.data;
    } catch (error) {
      console.error("todolistStore -> fetchToDoList -> error", error);
    }
  };

  addTask = (task) => {
    task.id = this.items[this.items.length - 1].id + 1;
    this.items.push(task);
  };
}

const todolistStore = new ToDoListStore();
todolistStore.fetchToDo();

export default todolistStore;
