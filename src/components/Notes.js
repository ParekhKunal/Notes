import React from "react";
import "./notes.css";
import { AiFillDelete } from "react-icons/ai";

function Notes({ id, text, date, handleDeleteNote }) {
  return (
    <div className="notes" id={id}>
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <AiFillDelete
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
}

export default Notes;
