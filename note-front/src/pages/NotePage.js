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
    console.debug("getNotes called", allParams);
    const response = await fetch(`/api/notes/${noteId}`);
    const data = await response.json();
    console.log(data);
    setNote(data);
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft />
          </Link>
        </h3>
      </div>
      <textarea defaultValue={note?.body}></textarea>
    </div>
  );
};
