import React, { useState, useEffect } from "react";
import Delete from "./Delete";
import Edit from "./Edit";

const Display = ({ records, onDelete, onEdit }) => {

  const [editRecordId, setEditRecordId] = useState(null);

  const handleEdit = (recordId) => {
    setEditRecordId(recordId);
  };

  const handleHook = () => {
    setEditRecordId(null);
  };

  return (
    <div id="container1">
      {records.map((elem, index) => {
        return (
          <div id="display" key={index}>
            <h1>Student ID: {elem.StudentId}</h1>
            <div id="buttons">
              <Delete recordId={elem.StudentId} onDelete={onDelete}></Delete>
              <button
                type="edit"
                onClick={() => handleEdit(elem.StudentId)}
                className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 bg-blue-700 text-white hover:bg-blue-800"
              >
                Edit
              </button>
            </div>
            <p>Name: {elem.StudentName}</p>
            <p>Roll: {elem.StudentId}</p>
            <p>Branch: {elem.Department}</p>
            {editRecordId === elem.StudentId && (
              <Edit recordId={elem.StudentId} onEdit={onEdit} data={elem} hook={handleHook}/>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Display;
