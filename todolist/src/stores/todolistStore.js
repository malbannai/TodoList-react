// import { action, makeObservable, observable } from "mobx";
import axios from "axios";

class ToDoListStore {
  tasks = [];

  constructor() {
    makeObservable(this, {
      tasks: observable,
    });
  }
}

fetchToDoList = async () => {
  try {
    const response = await axios.get("http://localhost:8000/");
    this.tasks = response.data;
  } catch (error) {
    console.error("todolistStore -> fetchToDoList -> error", error);
  }
};

const todolistStore = new ToDoListStore();
todolistStore.fetchToDoList();

export default todolistStore;
