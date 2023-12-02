import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const DeletedData = ({deletedNoteId}) => {
  const [deleted, setDeleted] = useState([]);
  // const searchParams = new URLSearchParams(window.location.search);
  // const deletedNoteId = searchParams.get("deletedNoteId");

  useEffect(() => {
    axios.get(`http://localhost:3500/Notes?isDeleted=true`).then((res) => {
      console.log(res.data);
      setDeleted(res.data);
    });
  }, []);

  return (
    <div>
      <div className="row text-center p-5 well">
        {deleted.map((item) => {
          return <p>{item.Title}</p>;
        })}
      </div>
      {deletedNoteId && <p>Deleted note id: {deletedNoteId}</p>}
    </div>
  );
};
export default DeletedData;