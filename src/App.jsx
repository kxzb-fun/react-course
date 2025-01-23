import TaskApp from "./components/TaskApp/TaskApp";
import TaskAppReducer from "./components/TaskAppReducer/TaskApp";
// import { useState } from "react";
const App = () => {
  return (
    <>
      <TaskApp />
      <TaskAppReducer/>
    </>
  );
};

export default App;
