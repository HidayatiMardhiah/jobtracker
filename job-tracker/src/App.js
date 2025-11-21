// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Form from "./Form";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);

  // Load jobs from localStorage safely
  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("jobs") || "[]");
    const validJobs = savedJobs.filter(job => job !== null && typeof job === "object");
    setJobs(validJobs);
  }, []);

  // Add a new job
  const addJob = (job) => {
    if (!job || typeof job !== "object") return;
    const updatedJobs = [...jobs, job];
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  // Delete a job
  const deleteJob = (index) => {
    const updatedJobs = jobs.filter((_, i) => i !== index);
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
          <Route path="/form" element={<Form addJob={addJob} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
