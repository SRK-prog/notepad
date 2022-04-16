import { useState } from "react";
import { Link } from "react-router-dom";

function Task({ lists, addTaskHandler }) {
  const [editMode, setEditMode] = useState(false);
  const [newTask, setNewTask] = useState("");

  const taskAdd = (e) => {
    e.preventDefault();
    const splited = newTask.split(" ");
    addTaskHandler(splited);
    setNewTask("");
  };

  return (
    <>
      <div>
        <div className="h-8 flex justify-between mt-3 mx-3 text-white cursor-pointer">
          <Link to="/">back</Link>
          <div onClick={() => setEditMode(!editMode)}>Edit</div>
        </div>
        <div className="bg-white h-[300px] mx-3 mt-3 rounded py-2 px-4 overflow-auto">
          {lists.map((item, index) => (
            <div
              className="h-8 flex items-center border-b border-slate-200 justify-between"
              key={index}
            >
              <span>{item.task}</span>
              <span className="text-slate-600 text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      {editMode && (
        <form
          onSubmit={taskAdd}
          className="absolute bottom-0 w-full flex px-3 gap-2 mb-4"
        >
          <input
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
            className="focus:outline-none w-full px-2 rounded py-2"
          />
          <button type="submit" className="flex justify-center items-center">
            <i className="fa-solid fa-check text-white px-4 bg-blue-300 py-3 rounded"></i>
          </button>
        </form>
      )}
    </>
  );
}

export default Task;
