import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import AddTodo from "../components/AddTodo";
import NoteLists from "../components/NoteLists";

function Home() {
  const [newData, setNewData] = useState();
  const [stared, setStared] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        process.env.REACT_APP_NODE_URL + "lists"
      );
      setNewData(data);
    };
    fetchData();
  }, []);

  const removeListHandler = (id) => {
    const filtered = newData.filter((item) => item?._id !== id);
    setNewData(filtered);
  };

  const showStaredHandler = () => {
    if (stared === false) {
      setStared(null);
    } else {
      setStared(false);
    }
  };

  const addListHandler = (request) => {
    setNewData([...newData, request]);
  };
  return (
    <div className="h-screen">
      <Header showStaredHandler={showStaredHandler} />
      <AddTodo addListHandler={addListHandler} />
      <NoteLists
        filter={stared}
        removeListHandler={removeListHandler}
        Notelists={newData}
      />
    </div>
  );
}

export default Home;
