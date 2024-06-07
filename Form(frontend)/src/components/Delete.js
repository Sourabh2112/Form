"use client";
import React from "react";

const Delete = ({ recordId, onDelete }) => {
  const handleDelete = () => {
    // Delete(recordId);
    onDelete(recordId);
  };

  // const Delete = (id) =>{
  //   //const url = `http://localhost:15690/api/Student/${id}`;
  //   console.log(id);
  //   axios.delete(`http://localhost:15690/api/Student/${id}`)
  //   .then((result) => {
  //     alert(result.data);
  //   }).catch((error) => {
  //     alert(error);
  //   })
  // }
  
  return (
    <>
      <button
        type="delete"
        onClick={handleDelete}
        className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 bg-red-700 text-white hover:bg-red-800"
      >
        Delete
      </button>
    </>
  );
};

export default Delete;
