import React from "react";
import { useContext } from "react";
import { noteContext } from "../context/notes/NoteProvider.js";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { note, updateNote } = props;
  const { deleteNote } = context;
  const handleClick = () => {
    deleteNote(note._id);
    props.showAlert("Deleted Successfully", "warning");
  };
  const handleClick1 = () => {
    updateNote(note);
  };
  return (
    <div className="col-md-3">
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i className="fa-solid fa-trash-can mx-2" onClick={handleClick}></i>
          <i
            className="fa-solid fa-pen-to-square mx-2"
            onClick={handleClick1}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
