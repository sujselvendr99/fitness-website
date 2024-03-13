import React, { useEffect, useState } from 'react'
import NoteItem from './NoteItem'
import CreateNote from './CreateNote'
import NoteDetails from './NoteDetails'
import NavbarNotes from './NavbarNotes'
import '../note.scss'

function Note() {

  const [onCreateNote, setOnCreateNote] = useState(false);
  const [onViewNote, setOnViewNote] = useState(false)
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [search, setSearch] = useState("");

  let filteredNotes = [];

  useEffect(() => {
    const tempNotes = JSON.parse(localStorage.getItem("notes"));
    tempNotes && setNotes(tempNotes);
  }, []);

  const saveNotes = (items) => {
    localStorage.setItem("notes", JSON.stringify(items));
  };


  const handleCreateNote = (note) => {
    if (note) {
      const tempNotes = [...notes, note];
      setNotes(tempNotes);
      saveNotes(tempNotes);
    }

  }

  const handleOnUpdate = (note) => {
    setCurrentNote(note);
    setOnCreateNote(true);
  };

  const handleUpdateNote = (note) => {
    if (note) {
      const tempNotes = [...notes.map((n) => (n.id === note.id ? note : n))];
      setNotes(tempNotes);
      setCurrentNote(null);
      saveNotes(tempNotes);
    }
  };

  const handleDeleteNote = (noteId) => {
    const tempNotes = [...notes.filter((n) => n.id !== noteId)];
    setNotes(tempNotes);
    saveNotes(tempNotes)
  };

  const handleOnPreview = (note) => {
    setCurrentNote(note);
    setOnViewNote(true);
  };

  if (search) {
    filteredNotes = [
      ...notes.filter(
        (n) =>
          n.title.toLowerCase().includes(search.toLocaleLowerCase()) ||
          n.desc.toLowerCase().includes(search.toLocaleLowerCase())
      ),
    ];
  } else {
    filteredNotes = [...notes];
  }

  console.log(notes);

  return (
    <div className="notes">
      <NavbarNotes setOpen={setOnCreateNote} />
      <div className="wrapper">
        <div className="search-wrapper">
          <input 
          onChange={(e) => setSearch(e.target.value)}
          type="text" 
          className="search-input" 
          placeholder="Search" />
          <button className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="notes-wrapper">
          {filteredNotes.map(note => (
            <NoteItem 
            key={note?.id} 
            note={note} 
            onDelete = {handleDeleteNote}
            onUpdate={handleOnUpdate}
              onPreview={handleOnPreview} />
          ))}
        </div>

        {onCreateNote && (
          <CreateNote
            note={currentNote}
            createNote={handleCreateNote}
            updateNote={handleUpdateNote}
            setOpen={setOnCreateNote} />
        )}
        {onViewNote && <NoteDetails setView={setOnViewNote} />}

      </div>
    </div>
  )
}

export default Note