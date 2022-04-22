import { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment-timezone";
import { format } from "timeago.js";
import axios from "axios";

function Note({ note }) {
  const [stared, setStared] = useState(note?.star);

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

  return (
    <div className="bg-slate-100 mt-3 mx-3 px-4 py-3 rounded">
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
    </div>
  );
}
export default Note;
