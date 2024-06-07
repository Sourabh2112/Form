import React, { useState, useEffect } from "react";

const Edit = ({ recordId, onEdit, data, hook }) => {
  const [newData, setNewData] = useState({ name: "", roll: "", branch: "" });
  // console.log(recordId);
  useEffect(() => {
    setNewData(data);
    Open();
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();

    onEdit(recordId, newData);
    setNewData({ name: "", roll: "", branch: "" });
    document.getElementById("editForm").style.display = "none";
    hook();
  };

  const Open = () => {
    document.getElementById("editForm").style.display = "block";
    // hook();
  };

  const Close = () => {
    document.getElementById("editForm").style.display = "none";
    hook();
  };

  return (
    <>
      <div id="editForm">
        <div id="container2">
          <span id="close" onClick={Close}>
            &times;
          </span>
          <h1>EDIT FORM</h1>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="New name"
            value={newData.name}
            onChange={(e) => setNewData({ ...newData, name: e.target.value })}
          />
          <label htmlFor="roll">Roll Number:</label>
          <input
            type="text"
            placeholder="New roll"
            value={newData.roll}
            onChange={(e) => setNewData({ ...newData, roll: e.target.value })}
          />
          <label htmlFor="branch">Branch:</label>
          <input
            type="text"
            placeholder="New branch"
            value={newData.branch}
            onChange={(e) => setNewData({ ...newData, branch: e.target.value })}
          />
          <button
            onClick={handleEdit}
            type="submit"
            className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 m-3 bg-blue-700 text-white hover:bg-blue-800"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Edit;
