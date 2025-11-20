import React, { useState, useEffect } from "react";
import Form from "./Form";

export default function App() {
  const [jobs, setJobs] = useState([]);

  // Load jobs from localStorage when app starts
  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("jobs") || "[]");
    setJobs(savedJobs);
  }, []);

  // Add a new job
  const addJob = (job) => {
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
    <div>
      <h1>Job Application Tracker</h1>
      {/* Pass addJob function to your Form */}
      <Form addJob={addJob} />

      {/* Dashboard */}
      <h2>All Applications</h2>
      {jobs.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Company</th>
              <th>Location</th>
              <th>Role</th>
              <th>Status</th>
              <th>Date</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index}>
                <td>{job.companyName}</td>
                <td>{job.location}</td>
                <td>{job.role}</td>
                <td>{job.selectedOption}</td>
                <td>{job.selectedDate}</td>
                <td>{job.notes}</td>
                <td>
                  <button onClick={() => deleteJob(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
