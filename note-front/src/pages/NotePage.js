import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

export const NotePage = () => {
  const { noteId } = useParams();
  const allParams = useParams();

  useEffect(() => {
    getNote();
  }, [noteId]);

  const [note, setNote] = useState(null);

  const getNote = async () => {
    if (noteId === 'new') return
    console.debug("getNotes called", allParams);
    const response = await fetch(`/api/notes/${noteId}`);
    const data = await response.json();
    console.log(data);
    setNote(data);
  };

  const updateNote = async () => {
    fetch(`/api/notes/${noteId}/update/` , {
      method : "PUT",
      headers  : {
        'Content-Type' : "application/json"
      },
      body : JSON.stringify(note)
    });
  }

  const createNote = async () => {
    fetch(`/api/notes/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  const handleSubmit = () => {
    if (noteId !== 'new' && !note.body) {
      deleteNote();
    } else if (noteId !== 'new'){
      updateNote();
    } else if (noteId === 'new' && note !== null){
      createNote();
    }
  } 

  const deleteNote = async () => {
    fetch(`/api/notes/${noteId}/delete/` , {
      method : "DELETE" ,
      headers  : {
        'Content-Type' : "application/json"
      },
    })
  }

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/" onClick={handleSubmit}>
            <ArrowLeft />
          </Link>
        </h3>
        {noteId !== "new" ? (
          <button className=" justify-end" onClick={deleteNote}>
            Delete
          </button>
        ) : (
          <button>Done</button>
        )}
      </div>
      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        defaultValue={note?.body}
      ></textarea>
    </div>
  );
};
