import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./Addproject.css";
import "react-datepicker/dist/react-datepicker.css";
import "font-awesome/css/font-awesome.min.css";
import TextareaAutosize from "react-textarea-autosize";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import { Height } from "@mui/icons-material";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

export default function CreateNewProject() {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [status, setStatus] = useState("In Progress");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectManager, setProjectManager] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [teamMembers, setTeamMembers] = useState([""]);
  const [isFormOpen, setIsFormOpen] = useState(true);


  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleProjectTitleChange = (e) => {
    setProjectTitle(e.target.value);
  };

  const handleProjectManagerChange = (e) => {
    setProjectManager(e.target.value);
  };

  const handleProjectDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
  };

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handleKeyPress = (e) => {
    // Allow only digits and prevent 'e' character
    if (!/^\d+$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleAddProject = (event) => {
    event.preventDefault();
  
    const projectMembersArray = values.filter((value) => value.trim() !== '');
    const projectData = {
      projectTitle: projectTitle,
      projectDescription: projectDescription,
      maxBudget: budget,
      startDate: startDate,
      endDate: endDate,
      projectManager: projectManager,
      progress: status,
      projectMembers: projectMembersArray.map((member) => ({
        employeeName: member,
      })),
    };
  
    const jwtToken = localStorage.getItem("jwtToken");
    console.log("Token in Frontend : ",jwtToken);
  
    fetch('http://localhost:4000/addProject', {
      method: 'POST',
      headers: {
        // 'Authorization': `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
        'Authorization': `${jwtToken}`,
      },
      body: JSON.stringify(projectData),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('Response from the server:', data);
        toast.success("Project Added Successfully", {
          position: toast.CENTER,
          autoClose: 2000,
          onClose: () => {
            setIsFormOpen(false);
          },
        });
  
        setProjectTitle('');
        setProjectDescription('');
        setBudget('');
        setStartDate(null);
        setEndDate(null);
        setProjectManager('');
        setStatus('In Progress');
        setTeamMembers(['']);
        setValues([]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  

  const [textValue, setTextValue] = useState(""); // State for the main textbox
  const [values, setValues] = useState([]); // State to store added values

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleAddValue = () => {
    if (textValue.trim() !== "") {
      setValues([...values, textValue]);
      setTextValue("");
    }
  };
  
  const handleDeleteValue = (index) => {
    const newValues = [...values];
    newValues.splice(index, 1);
    setValues(newValues);
  };

  return ( 
    <div className={`create-new-project ${isFormOpen ? "" : "hidden"}`}>
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="frame">
            <form onSubmit={handleAddProject}>
            <div className="project-form">
              <div className="overlap-group">
                <div className="text-wrapper">End date</div>
                <DatePicker
                  className="datepicker-enddate"
                  selected={endDate}
                  onChange={handleEndDateChange}
                  dateFormat="dd/MM/yyyy"
                  required
                />
              </div>
              <div className="overlap-2">
                <div className="text-wrapper-2">Start date</div>
                <DatePicker
                  className="datepicker-startdate"
                  selected={startDate}
                  onChange={handleStartDateChange}
                  dateFormat="dd/MM/yyyy"
                  required
                />
              </div>
              <div className="overlap-3">
                <label htmlFor="status">Status*</label>
                <br />
                <select
                  id="status"
                  value={status}
                  onChange={handleStatusChange}
                >
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div className="text-wrapper-5">Project title*</div>
              <input
                type="text"
                className="rectangle-2"
                value={projectTitle}
                onChange={handleProjectTitleChange}
              />
              <div className="text-wrapper-6">Project manager*</div>
              <div className="text-wrapper-7">Project description*</div>

              <TextareaAutosize
                className="rectangle-5"
                value={projectDescription}
                onChange={handleProjectDescriptionChange}
                minRows={3}
                maxRows={10}
              />
              <input
                type="text"
                className="rectangle-3"
                value={projectManager}
                onChange={handleProjectManagerChange}
                required
              />
              <div className="text-wrapper-8">Budget (Maximum)*</div>
              <input
                type="number"
                className="rectangle-4"
                value={budget}
                onChange={handleBudgetChange}
                onKeyPress={handleKeyPress}
              />
              <div className="addmember">
                <div className="text-wrapper-9">Team members*</div>
                {teamMembers.map((member, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      value={textValue}
                      onChange={handleTextChange}
                      placeholder="Enter text"
                      className="rectangle-6"
                      style={{ height: "30px", width: "200px" }}
                    />
                  </div>
                ))}
                <button type="button" className="add_member" onClick={handleAddValue}>
                  <b>Add</b>
                </button>
                <div>
                  {values.map((value, index) => (
                    <div className="mem" key={index}>
                      <button type="button" className="remove" onClick={() => handleDeleteValue(index)}>
                        <b>-</b>
                      </button>
                      &nbsp;&nbsp;&nbsp;{value}
                      <hr />
                    </div>
                  ))}
                </div>
              </div>
              <button type="submit" className="add-project"
              onClick={handleAddProject}>
              <b>Add Project</b>
              </button>

              <div className="ellipse" />
              <div className="text-wrapper-11">-</div>
            </div>
            </form>
          </div>
          <div className="text-wrapper-12">Create new project</div>
          <p className="text-wrapper-13">
            Provide your project information below
          </p>
        </div>
      </div>
  </div>
);
}