import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import AddTodo from "../components/AddTodo";
import NoteLists from "../components/NoteLists";

function Home() {
  const [newData, setNewData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(process.env.REACT_APP_NODE_URL + "lists");
      setNewData(data);
    };
    fetchData();
  }, []);

  const addListHandler = (request) => {
    setNewData([...newData, request]);
  };
  return (
    <div className="h-screen">
      <Header />
      <AddTodo addListHandler={addListHandler} />
      <NoteLists Notelists={newData} />
    </div>
  );
}

export default Home;
