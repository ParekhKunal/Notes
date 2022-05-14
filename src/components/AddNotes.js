import React, { useState } from "react";
import "./addNotes.css";


function AddNotes({ handleAddNote }) {

  const [noteText, setNoteText] = useState("");
  
  const textLimit = "200";

  const handleChange = (event) => {
    if (textLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSave = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="notes new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{textLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNotes;
