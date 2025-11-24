// Dashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Dashboard({ jobs, deleteJob }) {
   const navigate = useNavigate();

   const handleEdit = (job) => {
    navigate("/form", { state: { job } });
   };

  return (
    <div className="dashboard-container">
      <h1>Job Application Tracker</h1>

      <div className="center-button">
      <Link to="/form" className="add-job-button">
        Add New Job Application
      </Link>
      </div>

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
                    <button className="delete-button" onClick={() => deleteJob(index)}>Delete</button>
                    <button className="edit-button" onClick={() => handleEdit(job)}>Edit</button>
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
