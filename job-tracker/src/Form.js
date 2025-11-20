import "./Form.css";
import { React, useState } from "react";

function Form({ addJob }) {
    const [companyName, setCompanyName] = useState("");
    const [location, setLocation] = useState("");
    const [role, setRole] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [notes, setNotes] = useState("");
    
    const handleChange = (e) => {
        setSelectedDate(e.target.value);
    };

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
        addJob(newJob); // pass data to App
        handleReset();
        // Add your form submission logic here
    };

    const handleReset = () => {
        // Reset all state variables here
        setCompanyName("");
        setLocation("");
        setRole("");
        setSelectedOption("");
        setSelectedDate("");
        setNotes("");
    };

    return (
        <div className="App">
            <h1>Job Details</h1>
            <fieldset>
                <form action="#" method="get">
                    <label for="Company Name">
                        Company Name
                    </label>
                    <input
                        type="text"
                        name="companyname"
                        id="companyname"
                        value={companyName}
                        onChange={(e) =>
                            setCompanyName(e.target.value)
                        }
                        placeholder="Enter Company Name"
                        required
                    />
                    <label for="location">Enter Location </label>
                    <input
                        type="text"
                        name="location"
                        id="location"
                        value={location}
                        onChange={(e) =>
                            setLocation(e.target.value)
                        }
                        placeholder="Enter location"
                        required
                    />
                    <label for="text">Role</label>
                    <input
                        type="text"
                        name="role"
                        id="role"
                        value={role}
                        onChange={(e) =>
                            setRole(e.target.value)
                        }
                        placeholder="Enter Job Role"
                        required
                    />
                    <label>Job Application Progress</label>
                    <select
                        name="select"
                        id="select"
                        value={selectedOption}
                        onChange={(e) =>
                            setSelectedOption(
                                e.target.value
                            )
                        }
                    >
                        <option
                            value=""
                            disabled
                            selected={selectedOption === ""}
                        >
                            Status
                        </option>
                        <optgroup label="Started">
                            <option value="1">Applied CV</option>
                            <option value="2">Application Viewed</option>
                        </optgroup>
                        <optgroup label="In Progress">
                            <option value="4">Technical test</option>
                            <option value="5">Interview</option>
                        </optgroup>
                         <optgroup label="Closed">
                            <option value="6">Tiada rezeki</option>
                            <option value="7">Offered</option>
                        </optgroup>
                    </select>
                    <label for="date">Select Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={selectedDate}
                        onChange={handleChange}
                    />
                    <label for="notes">Notes</label>
                    <textarea
                        name="notes"
                        id="notes"
                        cols="30"
                        rows="10"
                        onChange={(e) =>
                            setNotes(e.target.value)
                        }
                        placeholder="Notes of the job application"
                        required
                    ></textarea>
                    <button
                        type="reset"
                        value="reset"
                        onClick={() => handleReset()}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        value="Submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Submit
                    </button>
                </form>
            </fieldset>
        </div>
    );
}

export default Form;