import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as actions from "./store/actions";
import { initiateStore } from "./store/store";

const store = initiateStore();

const Test = (params) => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  const comleteTask = (tastId) => {
    store.dispatch(actions.taskCompleted(tastId));
  };

  const changeTitle = (tastId) => {
    store.dispatch(actions.titleChanged(tastId));
  };

  const deleteTask = (tastId) => {
    store.dispatch(actions.taskDeleted(tastId));
  };

  return (
    <>
      <h1>Test</h1>
      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.title}</p>
            <p>{`Completed: ${el.completed}`}</p>
            <button onClick={() => comleteTask(el.id)}>Completed</button>
            <button onClick={() => changeTitle(el.id)}>Change title</button>
            <button onClick={() => deleteTask(el.id)}>Delete task</button>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Test />
    <App />
  </React.StrictMode>
);

reportWebVitals();
