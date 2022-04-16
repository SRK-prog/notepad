import { useState } from "react";
import { Link } from "react-router-dom";

function Note({ note }) {
  const [stared, setStared] = useState(note.star);
  return (
    <div className="bg-slate-100 mt-3 mx-3 px-4 py-3 rounded">
      <div className="flex mb-4">
        <Link className="w-full" to="/details">
          <div className="text-slate-900 text-xl font-semibold">
            {note.Title}
          </div>
        </Link>
        <div onClick={() => setStared(!stared)}>
          <i
            className={`fa-solid fa-star cursor-pointer ${
              stared ? "text-teal-600" : "text-slate-300"
            }`}
          ></i>
        </div>
      </div>
      <div className="flex justify-between text-xs">
        <div>{note.created}</div>
        <div>{note.updated}</div>
      </div>
    </div>
  );
}
export default Note;
