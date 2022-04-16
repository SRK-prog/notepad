import React from "react";
import Note from "./Note";

function NoteLists({ Notelists }) {
  return (
    <>
      {Notelists.map((listItem, index) => (
        <div key={index}>
          <Note note={listItem} />
        </div>
      ))}
    </>
  );
}

export default NoteLists;
