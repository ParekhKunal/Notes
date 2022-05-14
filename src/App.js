import "./App.css";
import NotesList from "./components/NotesList";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Welcome friend!\nIts Time to take a Notes",
      date: "13/05/2022",
    },
    
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid,
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
 
  useEffect(() => {
   const savedNotes = JSON.parse(
     localStorage.getItem("notes-data")
   );
   if (savedNotes) {
     setNotes(savedNotes);
   }
  }, []);

  useEffect(() => {
   localStorage.setItem("notes-data", JSON.stringify(notes));
  }, [notes]);
 

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="con">
        <div className="container">
          <Header handleDarkMode={setDarkMode} />
          <Search handleSearchNote={setSearchText} />
        </div>

        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
