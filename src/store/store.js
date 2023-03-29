import { legacy_createStore as createStore } from "redux";
import { taskReduser } from "./taskReduser";

const initialState = [
  { id: 1, title: "Tast 1", completed: false },
  { id: 2, title: "Tast 2", completed: false },
];

export function initiateStore() {
  return createStore(taskReduser, initialState);
}
