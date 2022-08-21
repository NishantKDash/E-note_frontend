import React from "react";
import { useContext, useState } from "react";
import { noteContext } from "../context/notes/NoteProvider.js";

const AddNote = (props) => {
  const { notes, addNote, deleteNote, editNote } = useContext(noteContext);
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Note Added Successfully", "success");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container my-3">
        <h2>Add a note!</h2>
        <form>
          <div class="mb-3">
            <label for="title" class="form-label">
              Title
            </label>
            <input
              type="text"
              value={note.title}
              class="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div class="mb-3">
            <label for="desc" class="form-label">
              Description
            </label>
            <input
              type="text"
              value={note.description}
              name="description"
              class="form-control"
              id="description"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div class="mb-3">
            <label for="tag" class="form-label">
              Tag
            </label>
            <input
              value={note.tag}
              type="text"
              name="tag"
              class="form-control"
              id="tag"
              onChange={onChange}
            />
          </div>

          <button
            disabled={note.title.length < 5 || note.description.length < 5}
            type="submit"
            class="btn btn-primary"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
