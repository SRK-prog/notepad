import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Task from "../components/Task";
import { useLocation } from "react-router";

function Details() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [newTask, setNewTask] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        process.env.REACT_APP_NODE_URL + "notes?listId=" + path
      );
      setNewTask(data);
    };
    fetchData();
  }, [path]);

  const addTaskHandler = async (value) => {
    const newValue = eval(value[0]);
    setNewTask([...newTask, { amount: newValue, label: value[1] }]);
    try {
      await axios.post(process.env.REACT_APP_NODE_URL + "notes", {
        amount: newValue,
        listId: path,
        label: value[1],
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-gredient min-h-full">
      <Header />
      <Task lists={newTask} addTaskHandler={addTaskHandler} />
    </div>
  );
}

export default Details;
