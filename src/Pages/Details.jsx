import React, { useState } from "react";
import Header from "../components/Header";
import Task from "../components/Task";

const data = [
  {
    task: "2313",
    label: "salary"
  },
];

function Details() {
  const [newTask, setNewTask] = useState(data);

  const addTaskHandler = (value) => {
    const newValue = eval(value[0]);
    setNewTask([...newTask, {task: newValue, label: value[1]}])
  };
  return (
    <div className="gredient h-screen">
      <Header />
      <Task lists={newTask} addTaskHandler={addTaskHandler} />
    </div>
  );
}

export default Details;
