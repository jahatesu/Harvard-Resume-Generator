import React from "react";

function WorkExperienceForm({ workExperience, setResumeData }) {
  const handleChange = (index, field, value) => {
    setResumeData(prev => {
      const updated = [...prev.workExperience];
      updated[index] = {
        ...updated[index],
        [field]: value,
      };
      return { ...prev, workExperience: updated };
    });
  };

  const addWorkExperience = () => {
    setResumeData(prev => ({
      ...prev,
      workExperience: [
        ...prev.workExperience,
        {
          company: "",
          role: "",
          duration: "",
          description: "",
        },
      ],
    }));
  };

  const removeWorkExperience = (index) => {
    setResumeData(prev => {
      const updated = prev.workExperience.filter((_, i) => i !== index);
      return { ...prev, workExperience: updated };
    });
  };

  return (
    <div>
      <h2>Work Experience</h2>

      {workExperience.length === 0 && (
        <p>No work experience added yet.</p>
      )}

      {workExperience.map((job, index) => (
        <div
          key={index}
          style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}
        >
          <input
            placeholder="Company"
            value={job.company}
            onChange={e => handleChange(index, "company", e.target.value)}
          />

          <input
            placeholder="Role"
            value={job.role}
            onChange={e => handleChange(index, "role", e.target.value)}
          />

          <input
            placeholder="Duration"
            value={job.duration}
            onChange={e => handleChange(index, "duration", e.target.value)}
          />

          <textarea
            placeholder="Description"
            value={job.description}
            onChange={e => handleChange(index, "description", e.target.value)}
          />

          <button onClick={() => removeWorkExperience(index)}>
            Remove
          </button>
        </div>
      ))}

      <button onClick={addWorkExperience}>
        + Add Work Experience
      </button>
    </div>
  );
}

export default WorkExperienceForm;
