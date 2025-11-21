// Dashboard.js
import React from "react";
import { Link } from "react-router-dom";

function Dashboard({ jobs, deleteJob }) {
  return (
    <div className="dashboard-container">
      <h1>Job Application Tracker</h1>

      <Link to="/form">
        <button className="add-job-button">Add New Job Application</button>
      </Link>

      <h2>All Applications</h2>

      {jobs.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        <table>
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
            {jobs.map((job, index) =>
              job ? (
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
              ) : null
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Dashboard;
