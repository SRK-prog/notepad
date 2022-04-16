import { useState } from "react";

function AddTodo({ addListHandler }) {
  const [taskClick, setTaskClick] = useState(false);
  const [taskname, setTaskName] = useState("");

  const doneHandler = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); 
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    addListHandler({
      Title: taskname,
      updated: today,
      created: today,
      star: false,
    });
    setTaskClick(false)
  };
  return (
    <>
      {taskClick ? (
        <form onSubmit={doneHandler} className="h-10 flex items-center bg-[#6EAF8B] mt-2 px-3 mx-2 cursor-pointer">
          <i
            onClick={() => setTaskClick(false)}
            className="fa-solid fa-xmark text-white mr-4"
          ></i>
          <input
            autoFocus
            className="w-full focus:outline-none p-1 rounded"
            type="text"
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
          <button type="submit" className="ml-1 text-white text-sm">
            Create
          </button>
        </form>
      ) : (
        <div
          className="h-10 flex items-center bg-[#6EAF8B] mt-2 px-3 mx-2 cursor-pointer"
          onClick={() => setTaskClick(!taskClick)}
        >
          <i className="fa-solid fa-plus text-white"></i>
          <div className="text-white text-sm ml-2">Add New</div>
        </div>
      )}
    </>
  );
}

export default AddTodo;
