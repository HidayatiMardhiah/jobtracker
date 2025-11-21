// Form.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function Form({ addJob }) {
  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      companyName,
      location,
      role,
      selectedOption,
      selectedDate,
      notes,
    };

    addJob(newJob);
    handleReset();
    navigate("/"); // go back to dashboard
  };

  const handleReset = () => {
    setCompanyName("");
    setLocation("");
    setRole("");
    setSelectedOption("");
    setSelectedDate("");
    setNotes("");
  };

  return (
    <div className="form-container">
      <h1>Job Details</h1>
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
          value={location}
          onChange={(e) => setLocation(e.target.value)}
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
