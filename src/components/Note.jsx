import { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment-timezone";
import { format } from "timeago.js";
import axios from "axios";
import { useLongPress } from "use-long-press";

function Note({ note, removeListHandler }) {
  const [stared, setStared] = useState(note?.star);
  const [togglePopUp, setTogglePopUp] = useState(false);

  const bind = useLongPress(() => {
    setTogglePopUp(true);
  });

  const starHandler = async () => {
    setStared(!stared);
    try {
      const response = await axios.put(
        process.env.REACT_APP_NODE_URL + "lists/" + note?._id,
        {
          star: !note?.star,
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
    <div {...bind()} className="bg-slate-100 mt-3 mx-3 px-4 py-3 rounded">
      <div className="flex mb-4">
        <Link className="w-full" to={"/details/" + note?._id}>
          <div className="text-slate-900 text-xl font-semibold">
            {note?.Title}
          </div>
        </Link>
        <div onClick={starHandler}>
          <i
            className={`fa-solid fa-star cursor-pointer ${
              stared ? "text-teal-600" : "text-slate-300"
            }`}
          ></i>
        </div>
      </div>
      <div className="flex justify-between text-xs">
        <div>{moment(note?.createdAt).format("DD/MM/YYYY")}</div>
        <div>{format(note?.updated || note?.updatedAt)}</div>
      </div>
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
