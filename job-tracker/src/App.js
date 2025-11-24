// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Form from "./Form";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);

  // Load jobs from localStorage on mount
  useEffect(() => {
    const savedJobs = localStorage.getItem("jobs");
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  } , []);

  // Add a new job with unique ID
  const addJob = (newJob) => {
    const jobWithId = {
      ...newJob,
      id: Date.now().toString(), // Simple unique ID
    };
    
    const updatedJobs = [...jobs, jobWithId];
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  // Update existing job by ID
  const updateJob = (updatedJob) => {
    const updatedJobs = jobs.map((job) =>
      job.id === updatedJob.id ? updatedJob : job
    );
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  // Delete job by index
  const deleteJob = (jobId) => {
     const updatedJobs = jobs.filter((job) => job.id !== jobId);
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={<Dashboard jobs={jobs} deleteJob={deleteJob} />}
          />
          <Route path="/form" element={<Form addJob={addJob} updateJob={updateJob} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
