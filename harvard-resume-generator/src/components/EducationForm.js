import React from "react";

function EducationForm({ education, setResumeData }) {
  const handleChange = (index, field, value) => {
    setResumeData(prev => {
      const updated = [...prev.education];
      updated[index][field] = value;
      return { ...prev, education: updated };
    });
  };

  const handleAdd = () => {
    setResumeData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        { degree: "", institution: "", year: "", description: "" }
      ]
    }));
  };

  const handleRemove = index => {
    setResumeData(prev => {
      const updated = [...prev.education];
      updated.splice(index, 1);
      return { ...prev, education: updated };
    });
  };

  return (
    <div>
      <h2>Education</h2>

      {education.map((edu, index) => (
        <div key={index} style={{ marginBottom: "10px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
          <input
            placeholder="Degree"
            value={edu.degree}
            onChange={e => handleChange(index, "degree", e.target.value)}
          />
          <input
            placeholder="Institution"
            value={edu.institution}
            onChange={e => handleChange(index, "institution", e.target.value)}
          />
          <input
            placeholder="Year"
            value={edu.year}
            onChange={e => handleChange(index, "year", e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={edu.description}
            onChange={e => handleChange(index, "description", e.target.value)}
          />
          <button type="button" onClick={() => handleRemove(index)}>Remove</button>
        </div>
      ))}

      <button type="button" onClick={handleAdd}>Add Education</button>
    </div>
  );
}

export default EducationForm;
