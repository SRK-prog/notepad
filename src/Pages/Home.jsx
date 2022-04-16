import { useState } from "react";
import Header from "../components/Header";
import AddTodo from "../components/AddTodo";
import NoteLists from "../components/NoteLists";
const data = [
  {
    Title: "Balance",
    updated: "1 hour ago",
    created: "09 07 2020",
    star: false,
  },

];
function Home() {
  const [newData, setNewData] = useState(data);

  const addListHandler = (request) => {
    setNewData([request, ...newData]);
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
