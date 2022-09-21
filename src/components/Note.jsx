import { useState } from "react";
import moment from "moment-timezone";
import { format } from "timeago.js";
import axios from "axios";
import ClickNHold from "react-click-n-hold";
import { useNavigate } from "react-router-dom";

function Note({ note, removeListHandler }) {
  const [stared, setStared] = useState(note?.star);
  const [togglePopUp, setTogglePopUp] = useState(false);
  const navigate = useNavigate();

  const starHandler = async (e) => {
    e.stopPropagation();
    note["star"] = !note?.star;
    setStared(!stared);
    try {
      const response = await axios.put(
        process.env.REACT_APP_NODE_URL + "lists/" + note?._id,
        {
          star: !stared,
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHandler = async () => {
    removeListHandler(note?._id);
    setTogglePopUp(false);
    try {
      await axios.delete(process.env.REACT_APP_NODE_URL + "lists/" + note?._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-slate-100 mt-3 mx-3 px-4 py-3 rounded cursor-pointer">
      <ClickNHold time={0.8} onClickNHold={() => setTogglePopUp(true)}>
        <>
          <div
            onClick={() => navigate("/details/" + note?._id)}
            className="flex mb-4"
          >
            <span className="w-full">
              <div className="text-slate-900 text-xl font-semibold select-none">
                {note?.Title}
              </div>
            </span>
            <div onClick={starHandler}>
              <i
                className={`fa-solid fa-star cursor-pointer ${
                  note?.star ? "text-teal-600" : "text-slate-300"
                }`}
              ></i>
            </div>
          </div>
          <div className="flex justify-between text-xs select-none">
            <div>{moment(note?.createdAt).format("DD/MM/YYYY")}</div>
            <div>{format(note?.updated || note?.updatedAt)}</div>
          </div>
        </>
      </ClickNHold>
      {togglePopUp && (
        <div className="flex justify-end gap-3 mt-3">
          <span
            onClick={deleteHandler}
            className="rounded px-2 py-1 bg-red-500 text-sm text-slate-50 cursor-pointer"
          >
            Delete
          </span>
          <span
            onClick={() => setTogglePopUp(false)}
            className="rounded px-2 py-1 bg-slate-500 text-sm text-slate-50 cursor-pointer"
          >
            Close
          </span>
        </div>
      )}
    </div>
  );
}
export default Note;
