import { useState } from 'react';
import './note.scss';
import { v4 as getID } from "uuid";
import React from 'react'

const CreateNote = ({ setOpen, note, createNote, updateNote }) => {

  const [title, setTitle] = useState(note ? note?.title : "");
  const [desc, setDesc] = useState(note ? note?.desc : "");

  const clearInputs = () => {
    setTitle("");
    setDesc("");
  }

  const handleClear = (event) => {
    event.preventDefault();
    clearInputs();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (note) {
      // update note
      updateNote({
        ...note,
        title,
        desc,
      });
    } else {
      //create note
      createNote({
        id: getID(),
        title,
        desc,
        createdAt: new Date().toDateString(),
      })
    }
    clearInputs();
    setOpen(false);
  };

  console.log(title, desc);
  return (
    <div className="insert-note">
      <div className="insert-wrapper">
        <div className="insert-header">
          <h2 className="heading">{note ? "Update Note" : "Add Note"}</h2>
          <div className="close-btn" onClick={() => setOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>

        <form className="insert-form" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Title"
            className="input-form"
            value = {title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="textarea-form"
            placeholder="Type here"
            value = {desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          
          <div className="insert-actions">
            <button className="clear-btn" onClick={handleClear}>Clear</button>
            <button type="submit" className="save-btn">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;