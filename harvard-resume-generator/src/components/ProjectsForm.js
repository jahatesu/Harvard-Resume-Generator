import React from "react";

function ProjectsForm({ projects, setResumeData }) {
  const handleChange = (index, field, value) => {
    setResumeData(prev => {
      const updated = [...prev.projects];
      updated[index][field] = value;
      return { ...prev, projects: updated };
    });
  };

  const handleAdd = () => {
    setResumeData(prev => ({
      ...prev,
      projects: [
        ...prev.projects,
        { name: "", description: "" }
      ]
    }));
  };

  const handleRemove = index => {
    setResumeData(prev => {
      const updated = [...prev.projects];
      updated.splice(index, 1);
      return { ...prev, projects: updated };
    });
  };

  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <input
            placeholder="Project Name"
            value={project.name}
            onChange={e => handleChange(index, "name", e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={project.description}
            onChange={e => handleChange(index, "description", e.target.value)}
          />
          <button type="button" onClick={() => handleRemove(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={handleAdd}>Add Project</button>
    </div>
  );
}

export default ProjectsForm;
