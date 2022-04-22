import React from "react";
import Note from "./Note";

function NoteLists({ Notelists, removeListHandler, filter }) {
  return (
    <>
      {Notelists?.slice(0)
        .reverse()
        .filter((item) => item.star !== filter)
        .map((listItem, index) => (
          <div key={index}>
            <Note removeListHandler={removeListHandler} note={listItem} />
          </div>
        ))}
    </>
  );
}

export default NoteLists;
