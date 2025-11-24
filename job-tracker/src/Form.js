// Form.js
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Form.css";

function Form({ addJob, updateJob }) {
  const navigate = useNavigate();
  const location = useLocation();
  const editingJob = location.state?.job; // Get job data if editing

  const handleGoBack = () => { navigate(-1);};

  const [companyName, setCompanyName] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [role, setRole] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [notes, setNotes] = useState("");

  // Pre-fill form if editing
  useEffect(() => {
    if (editingJob) {
      setCompanyName(editingJob.companyName || "");
      setJobLocation(editingJob.location || "");
      setRole(editingJob.role || "");
      setSelectedOption(editingJob.selectedOption || "");
      setSelectedDate(editingJob.selectedDate || "");
      setNotes(editingJob.notes || "");
    }
  }, [editingJob]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const jobData = {
      companyName: companyName.trim(),
      location: jobLocation.trim(),
      role: role.trim(),
      selectedOption,
      selectedDate,
      notes: notes.trim(),
    };

    if (editingJob) {
      // Update existing job
      updateJob({ ...jobData, id: editingJob.id });
    } else {
      // Add new job
      addJob(jobData);
    }

    handleReset();
    navigate("/"); // go back to dashboard
  };

  const handleReset = () => {
    setCompanyName("");
    setJobLocation("");
    setRole("");
    setSelectedOption("");
    setSelectedDate("");
    setNotes("");
  };

  return (
    <div className="form-container">
      <button className ="goBack" onClick={handleGoBack}>Go Back</button>
      <h1>{editingJob ? "Edit Job Details" : "Add Job Details"}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="companyname">Company Name</label>
        <input
          type="text"
          id="companyname"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Enter Company Name"
          required
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={jobLocation}
          onChange={(e) => setJobLocation(e.target.value)}
          placeholder="Enter Location"
          required
        />

        <label htmlFor="role">Role</label>
        <input
          type="text"
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Enter Job Role"
          required
        />

        <label htmlFor="status">Job Application Progress</label>
        <select
          id="status"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          required
        >
          <option value="" disabled>
            Select Status
          </option>
          <optgroup label="Started">
            <option value="Applied CV">Applied CV</option>
            <option value="Application Viewed">Application Viewed</option>
          </optgroup>
          <optgroup label="In Progress">
            <option value="Technical test">Technical test</option>
            <option value="Interview">Interview</option>
          </optgroup>
          <optgroup label="Closed">
            <option value="Tiada rezeki">Tiada rezeki</option>
            <option value="Offered">Offered</option>
          </optgroup>
        </select>

        <label htmlFor="date">Select Date</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          required
        />

        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notes of the job application"
          rows="5"
          required
        ></textarea>

        <div className="form-buttons">
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="submit">
            {editingJob ? "Update Job" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;