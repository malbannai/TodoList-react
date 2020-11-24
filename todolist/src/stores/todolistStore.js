import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class ToDoListStore {
  items = [];

  constructor() {
    makeObservable(this, {
      items: observable,
      fetchToDo: action,
      addTask: action,
      deleteTask: action,
      changePriortiy: action,
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

  changePriortiy = async (itemId) => {
    const priorities = {
      High: "Low",
      Low: "Medium",
      Medium: "High",
    };
    try {
      await axios.put(`http://localhost:8000/todos/${itemId}`);
      const priorityUpdate = this.items.find((item) => itemId === item.id);
      priorityUpdate.priority = priorities[priorityUpdate.priority];
    } catch (error) {
      console.log("Nothing was found!!!!");
    }
  };

  deleteTask = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8000/todos/${itemId}`);
      this.items = this.items.filter((item) => item.id !== itemId);
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

  // Moudhi 1-0 changeStatus
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
