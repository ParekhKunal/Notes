import React from 'react'
import AddNotes from './AddNotes';
import Notes from './Notes'
import './noteslist.css'

function NotesList({ notes, handleAddNote, handleDeleteNote}) {
  return (
    <div className="container">
      <div className="notes-list">
        {notes.map((note) => (
          <Notes
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
        <AddNotes handleAddNote={handleAddNote} />
      </div>
    </div>
  );
}

export default NotesList