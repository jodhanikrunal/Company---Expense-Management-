import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./EditProject.css";
import "react-datepicker/dist/react-datepicker.css";
import "font-awesome/css/font-awesome.min.css";
import TextareaAutosize from "react-textarea-autosize";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function EditProject({ project }) {

  // console.log("Received Project Prop", project);

  const [startDate, setStartDate] = useState(new Date(project.startDate));
  const [endDate, setEndDate] = useState(new Date(project.endDate));
  const [status, setStatus] = useState(project.progress);
  const [projectTitle, setProjectTitle] = useState(project.projectTitle);
  const [projectManager, setProjectManager] = useState(project.projectManager);
  const [projectDescription, setProjectDescription] = useState(project.projectDescription);
  const [budget, setBudget] = useState(project.maxBudget);
  const [teamMembers, setTeamMembers] = useState(
    project.projectMembers.map((member) => member.employeeName)
  );
  

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

  const handleTeamMemberChange = (e, index) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index] = e.target.value;
    setTeamMembers(updatedTeamMembers);
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

    const projectID = project._id;
    const jwtToken = localStorage.getItem("jwtToken");
    // console.log("Token in Frontend : ",jwtToken);

    fetch(`http://localhost:4000/editProject/${projectID}`, {
      method: 'PUT',
      headers: {
        // 'Authorization': `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
        'Authorization': `${jwtToken}`,
      },
      body: JSON.stringify(projectData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response from the server:', data);

        toast.success("Project Edited Successfully", {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 2000,
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
        setTeamMembers(teamMembers.map(() => ''));
        // setTeamMemberInputs(['']);
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error("Error editing the project", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      });
  };


  const [textValue, setTextValue] = useState(""); // State for the main textbox
  const [values, setValues] = useState([]); // State to store added values

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleAddValue = () => {
    if (textValue.trim() !== "") {
      // setTeamMembers([...teamMembers, textValue]);
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
    <div className="create-new-project">
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
                  type="text"
                  className="rectangle-4"
                  value={budget}
                  onChange={handleBudgetChange}
                />
                <div className="addmember">
                  <div className="text-wrapper-9">Team members*</div>
                  {teamMembers.length === 0 ? ( // Check if the array is empty
                    <div>
                      <input
                        type="text"
                        value={''}
                        onChange={(e) => handleTeamMemberChange(e, 0)} // You can use 0 or another index
                        placeholder="Enter text"
                        className="rectangle-6"
                        style={{ height: "30px", width: "200px" }}
                      />
                    </div>
                  ) : (
                    // Map over the array to create input fields
                    teamMembers.map((member, index) => (
                      <div key={index}>
                        <input
                          type="text"
                          value={member}
                          onChange={(e) => handleTeamMemberChange(e, index)}
                          placeholder="Enter text"
                          className="rectangle-6"
                          style={{ height: "30px", width: "200px" }}
                        />
                      </div>
                    ))
                  )}
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
                  <b>Save</b>
                </button>

                <div className="ellipse" />
                <div className="text-wrapper-11">-</div>
              </div>
            </form>
          </div>
          <div className="text-wrapper-12">Edit Project</div>
          <p className="text-wrapper-13">
            Modify your project information below
          </p>
        </div>
      </div>
    </div>
  );
}
