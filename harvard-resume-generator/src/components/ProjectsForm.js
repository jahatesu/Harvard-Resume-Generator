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


const textareaStyle = {
  ...inputStyle,
  minHeight: "60px",
};

const buttonStyle = {
  padding: "6px 10px",
  marginRight: "8px",
  cursor: "pointer",
};

function ProjectsForm({ projects = [], setResumeData }) {
  const handleChange = (index, field, value) => {
    setResumeData(prev => {
      const updated = [...prev.projects];
      updated[index][field] = value;
      return { ...prev, projects: updated };
    });
  };

  const addProject = () => {
    setResumeData(prev => ({
      ...prev,
      projects: [
        ...prev.projects,
        { title: "", description: "" },
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
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: "12px" }}>
          <input
            style={inputStyle}
            placeholder="Project Title"
            value={project.title}
            onChange={e =>
              handleChange(index, "title", e.target.value)
            }
          />

          <textarea
            style={textareaStyle}
            placeholder="Project description (what you built, tech used, impact)"
            value={project.description}
            onChange={e =>
              handleChange(index, "description", e.target.value)
            }
          />

          <button
            style={buttonStyle}
            onClick={() => removeProject(index)}
          >
            Remove Project
          </button>
        </div>
      ))}

      <button style={buttonStyle} onClick={addProject}>
        + Add Project
      </button>
    </div>
  );
}

export default ProjectsForm;
