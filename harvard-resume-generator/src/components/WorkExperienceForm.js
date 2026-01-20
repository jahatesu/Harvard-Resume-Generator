import React from "react";

const cardStyle = {
  border: "1px solid #ccc",
  padding: "30px",
  marginBottom: "16px",
  borderRadius: "10px",
  background: "#fafafa",
  maxWidth: "500px",  
  margin: "0 auto 20px auto",   
};

const inputStyle = {
  width: "100%",
  padding: "5px",
  marginBottom: "8px",
  borderRadius: "10px",
  fontSize: "14px",
};

const labelStyle = {
  fontWeight: "bold",
  fontSize: "13px",
  marginBottom: "4px",
  display: "block",
};

function WorkExperienceForm({ workExperience, setResumeData }) {
  const handleChange = (index, field, value) => {
    setResumeData(prev => {
      const updated = [...prev.workExperience];
      updated[index][field] = value;
      return { ...prev, workExperience: updated };
    });
  };

  const addJob = () => {
    setResumeData(prev => ({
      ...prev,
      workExperience: [
        ...prev.workExperience,
        { company: "", role: "", duration: "", description: "" },
      ],
    }));
  };

  const removeJob = index => {
    setResumeData(prev => ({
      ...prev,
      workExperience: prev.workExperience.filter((_, i) => i !== index),
    }));
  };

  return (
    <div style={cardStyle}>
      <h2>Work Experience</h2>

      {workExperience.map((job, index) => (
        <div key={index} style={{ marginBottom: "16px" }}>
          <label style={labelStyle}>Role</label>
          <input
            style={inputStyle}
            value={job.role}
            onChange={e => handleChange(index, "role", e.target.value)}
          />

          <label style={labelStyle}>Company</label>
          <input
            style={inputStyle}
            value={job.company}
            onChange={e => handleChange(index, "company", e.target.value)}
          />

          <label style={labelStyle}>Duration</label>
          <input
            style={inputStyle}
            value={job.duration}
            onChange={e => handleChange(index, "duration", e.target.value)}
          />

          <label style={labelStyle}>
            Description (one bullet per line)
          </label>
          <textarea
            style={{ ...inputStyle, height: "80px" }}
            value={job.description}
            onChange={e => handleChange(index, "description", e.target.value)}
          />

          <button onClick={() => removeJob(index)}>Remove</button>
        </div>
      ))}

      <button onClick={addJob}>+ Add Experience</button>
    </div>
  );
}

export default WorkExperienceForm;
