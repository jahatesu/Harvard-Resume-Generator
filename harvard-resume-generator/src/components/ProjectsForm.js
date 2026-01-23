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

function ProjectsForm({ projects = [], setResumeData, onBack, onFinish }) {
  const handleChange = (index, field, value) => {
    setResumeData(prev => {
      const updated = [...prev.projects];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, projects: updated };
    });
  };

  const addProject = () => {
    setResumeData(prev => ({
      ...prev,
      projects: [
        ...prev.projects,
        { title: "", technologies: "", date: "", description: "" },
      ],
    }));
  };

  const removeProject = index => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };

  return (
    <div style={cardStyle}>
      <h2 style={{ marginTop: 0, fontSize: "20px" }}>Academic & Personal Projects</h2>
      <p style={{ fontSize: "12px", color: "#666", marginBottom: "20px" }}>
        Showcase your technical skills through specific, impact-driven projects.
      </p>

      {projects.map((project, index) => (
        <div key={index} style={{ 
          marginBottom: "25px", 
          padding: "15px", 
          border: "1px dashed #ccc", 
          borderRadius: "8px",
          background: "#fff"
        }}>
          <label style={labelStyle}>Project Title *</label>
          <input
            style={inputStyle}
            placeholder="e.g. Real-time Stock Market Dashboard"
            value={project.title}
            onChange={e => handleChange(index, "title", e.target.value)}
          />

          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Date / Period</label>
              <input
                style={inputStyle}
                placeholder="e.g. Fall 2025"
                value={project.date}
                onChange={e => handleChange(index, "date", e.target.value)}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Technologies Used</label>
              <input
                style={inputStyle}
                placeholder="e.g. React, Node.js"
                value={project.technologies}
                onChange={e => handleChange(index, "technologies", e.target.value)}
              />
            </div>
          </div>

          <label style={labelStyle}>Description (one bullet per line) *</label>
          <textarea
            style={{ ...inputStyle, height: "100px", resize: "vertical" }}
            placeholder="• Engineered a low-latency data pipeline...&#10;• Integrated OpenAI API to automate..."
            value={project.description}
            onChange={e => handleChange(index, "description", e.target.value)}
          />

          <button
            type="button"
            style={{ ...actionButtonStyle, backgroundColor: "#ff4d4d", color: "white" }}
            onClick={() => removeProject(index)}
          >
            Remove Project
          </button>
        </div>
      ))}

      <button 
        type="button"
        style={{ ...actionButtonStyle, backgroundColor: "#4CAF50", color: "white", width: "100%", marginBottom: "20px" }}
        onClick={addProject}
      >
        + Add New Project
      </button>

      <div style={{ display: "flex", gap: "10px" }}>
      </div>
    </div>
  );
}

export default ProjectsForm;