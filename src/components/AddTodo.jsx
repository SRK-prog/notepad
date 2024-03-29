import { useState } from "react";
import axios from "axios";
import OutsideClickHandler from "react-outside-click-handler";

function AddTodo({ addListHandler }) {
  const [taskClick, setTaskClick] = useState(false);
  const [taskname, setTaskName] = useState("");
  const doneHandler = async (e) => {
    e.preventDefault();
    var today = new Date(Date.now());
    addListHandler({
      Title: taskname,
      updated: today,
      created: today,
      star: false,
    });
    setTaskClick(false);
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_NODE_URL + "lists",
        {
          Title: taskname,
        }
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {taskClick ? (
        <OutsideClickHandler
          onOutsideClick={() => {
            setTaskClick(false);
          }}
        >
          <form
            onSubmit={doneHandler}
            className="h-10 flex items-center bg-[#6EAF8B] mt-2 px-3 mx-2 cursor-pointer"
          >
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
        </OutsideClickHandler>
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
