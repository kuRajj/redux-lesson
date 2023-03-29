import { taskDeleted, taskUpdated } from "./actionTypes";

export function taskReduser(state = [], action) {
  switch (action.type) {
    case taskUpdated: {
      const newArray = [...state];
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );
      newArray[elementIndex] = { ...newArray[elementIndex], ...action.payload };
      return newArray;
    }
    case taskDeleted: {
      const newArray = [...state];
      const filtredTasks = newArray.filter((el) => el.id !== action.payload.id);
      return filtredTasks;
    }

    default:
      return state;
  }
}
