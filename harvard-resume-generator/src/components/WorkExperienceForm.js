import React from "react";

const cardStyle = {
  border: "1px solid #ccc",
  padding: "30px",
  borderRadius: "10px",
  background: "#fafafa",
  maxWidth: "500px",  
  margin: "0 auto 20px auto",   
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginBottom: "10px",
  borderRadius: "6px",
  border: "1px solid #ddd",
  fontSize: "14px",
  boxSizing: "border-box"
};

const labelStyle = {
  fontWeight: "bold",
  fontSize: "13px",
  marginBottom: "4px",
  display: "block",
  color: "#333",
};

const actionButtonStyle = {
  padding: "8px 12px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  fontSize: "12px",
  fontWeight: "bold",
  marginTop: "5px"
};

function WorkExperienceForm({ workExperience, setResumeData, onNext, onBack }) {
  
  const handleChange = (index, field, value) => {
    setResumeData(prev => {
      const updated = [...prev.workExperience];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, workExperience: updated };
    });
  };

  const addJob = () => {
    setResumeData(prev => ({
      ...prev,
      workExperience: [
        ...prev.workExperience,
        { role: "", company: "", location: "", duration: "", description: "" },
      ],
    }));
  };

  const removeJob = index => {
    setResumeData(prev => ({
      ...prev,
      workExperience: prev.workExperience.filter((_, i) => i !== index),
    }));
  };

  // Validation: Check if mandatory fields for existing jobs are filled
  const canProceed = workExperience.length > 0 && workExperience.every(job => 
    job.role.trim() !== "" && 
    job.company.trim() !== "" && 
    job.location.trim() !== "" &&
    job.duration.trim() !== ""
  );

  return (
    <div style={cardStyle}>
      <h2 style={{ marginTop: 0, fontSize: "20px" }}>Work Experience</h2>
      <p style={{ fontSize: "12px", color: "#666", marginBottom: "20px" }}>
        Tip: Start each bullet with a strong action verb (e.g., Led, Developed, Managed).
      </p>

      {workExperience.map((job, index) => (
        <div key={index} style={{ 
          marginBottom: "25px", 
          padding: "15px", 
          border: "1px dashed #ccc", 
          borderRadius: "8px" 
        }}>
          <label style={labelStyle}>Job Title / Role *</label>
          <input
            style={inputStyle}
            placeholder="e.g. Investment Banking Analyst"
            value={job.role}
            onChange={e => handleChange(index, "role", e.target.value)}
          />

          <label style={labelStyle}>Company *</label>
          <input
            style={inputStyle}
            placeholder="e.g. Goldman Sachs"
            value={job.company}
            onChange={e => handleChange(index, "company", e.target.value)}
          />

          <label style={labelStyle}>Location *</label>
          <input
            style={inputStyle}
            placeholder="e.g. New York, NY"
            value={job.location}
            onChange={e => handleChange(index, "location", e.target.value)}
          />

          <label style={labelStyle}>Duration *</label>
          <input
            style={inputStyle}
            placeholder="e.g. June 2021 – Present"
            value={job.duration}
            onChange={e => handleChange(index, "duration", e.target.value)}
          />

          <label style={labelStyle}>
            Description (one bullet per line) *
          </label>
          <textarea
            style={{ ...inputStyle, height: "100px", resize: "vertical" }}
            placeholder="• Led a team of 5 to optimize supply chain costs...&#10;• Developed a new financial model that..."
            value={job.description}
            onChange={e => handleChange(index, "description", e.target.value)}
          />

          {workExperience.length > 1 && (
            <button 
              onClick={() => removeJob(index)}
              style={{ ...actionButtonStyle, backgroundColor: "#ff4d4d", color: "white" }}
            >
              Remove Experience
            </button>
          )}
        </div>
      ))}

      <button 
        onClick={addJob}
        style={{ ...actionButtonStyle, backgroundColor: "#4CAF50", color: "white", width: "100%", marginBottom: "20px" }}
      >
        + Add Another Experience
      </button>

      <div style={{ display: "flex", gap: "10px" }}>
      </div>
    </div>
  );
}

export default WorkExperienceForm;