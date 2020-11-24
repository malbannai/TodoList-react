import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class ToDoListStore {
  items = [];

  constructor() {
    makeObservable(this, {
      items: observable,
      fetchToDo: action,
      addTask: action,
    });
  }

  fetchToDo = async () => {
    try {
      const response = await axios.get("http://localhost:8000/todos");
      this.items = response.data;
    } catch (error) {
      console.error("todolistStore -> fetchToDoList -> error", error);
    }
  };

  addTask = async (newItem) => {
    try {
      const response = await axios.post("http://localhost:8000/todos", newItem);
      this.items.push(response.data);
    } catch (error) {
      console.log("todolistStore -> addTask -> error", error);
    }
  };

  // Neeeeeeeeed to double check it!!!
  changeStatus = async (itemId) => {
    try {
      await axios.put(`http://localhost:8000/todos/${itemId}`);
      const taskUpdate = this.items.find((item) => itemId === item.id);
      taskUpdate.status = !taskUpdate.status;
    } catch (error) {
      console.log("Nothing was found!!!!");
    }
  };
}

const todolistStore = new ToDoListStore();
todolistStore.fetchToDo();

export default todolistStore;
