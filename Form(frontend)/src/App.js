"use client";
import Display from "./components/Display";
// import Form from "@/components/Form";
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    branch: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const [records, setRecords] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newRecord = { ...formData, id: new Date().getTime().toString() };
  //   setRecords([...records, newRecord]);
  //   console.log(records);

  //   setFormData({
  //     name: "",
  //     roll: "",
  //     branch: "",
  //   });
  // };

  const handleSave = () =>{
    const data = {
      StudentName : formData.name,
      StudentId : formData.roll,
      Department : formData.branch
    };
    const url = 'http://localhost:15690/api/Student';
    axios.post(url, data).then((result) => {
      getdata();
      clear();
      alert(result.data);
    }).catch((error) => {
      alert(error);
    })
  }

  useEffect(() => {
    getdata();
  }, [setRecords, records]); 

  const getdata = async () => {
    // axios.get('http://localhost:15690/api/Student')
    //   .then((result) => {
    //     setRecords(result.data); // Update to setRecords(result.data) instead of setRecords([result.data])
    //     console.log(records); // Log the data retrieved
          
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    try {
      const response = await fetch('http://localhost:15690/api/Student');
      const data = await response.json();      
      setRecords(JSON.parse(data));
      //console.log(records);
    } catch (error) {
      console.log(error);
    }
  }; 

  const clear = () =>{
    setFormData({
          name: "",
          roll: "",
          branch: "",
        });
  }

  const deleteRecord = (id) => {
    // if (Windows.confirm("confirm delete the record")==true) {
      axios.delete(`http://localhost:15690/api/Student/${id}`)
      .then((result) => {
        if (result.status === 200) {
          alert(result.data);
          //getdata();
        }
      }).catch((error) => {
        alert(error);
      })
  };

  const editRecord = (id, updatedData) => {
    setRecords((prevRecords) =>
      prevRecords.map((record) =>
        record.id === id ? { ...record, ...updatedData } : record
      )
    );
  };

  return (
    <>
      <div id="container">
        <form id="studentForm">
          <div id="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInput}
              required
            ></input>
          </div>
          <div id="form-group">
            <label htmlFor="roll">Roll Number:</label>
            <input
              type="number"
              name="roll"
              id="roll"
              placeholder="Enter your roll number"
              value={formData.roll}
              onChange={handleInput}
              required
            ></input>
          </div>
          <div id="form-group">
            <label htmlFor="branch">Branch:</label>
            <input
              type="text"
              name="branch"
              id="branch"
              placeholder="Enter your branch"
              value={formData.branch}
              onChange={handleInput}
              required
            ></input>
          </div>
          <button
            onClick={handleSave}
            id="submit"
            type="submit"
            className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 bg-blue-700 text-white hover:bg-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      {/* <Form formData={formData} onChange={handleInput} onSubmit={handleSubmit}></Form> */}
      <Display records={records} onDelete={deleteRecord} onEdit={editRecord}/>
    </>
  );
};

export default App;
