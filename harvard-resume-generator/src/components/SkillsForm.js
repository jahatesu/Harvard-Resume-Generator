import React from "react";

function SkillsForm({ skills, setResumeData }) {
  const handleChange = (index, value) => {
    setResumeData(prev => {
      const updated = [...prev.skills];
      updated[index] = value;
      return { ...prev, skills: updated };
    });
  };

  const handleAdd = () => {
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, ""]
    }));
  };

  const handleRemove = index => {
    setResumeData(prev => {
      const updated = [...prev.skills];
      updated.splice(index, 1);
      return { ...prev, skills: updated };
    });
  };

  return (
    <div>
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div key={index}>
          <input
            placeholder="Skill"
            value={skill}
            onChange={e => handleChange(index, e.target.value)}
          />
          <button type="button" onClick={() => handleRemove(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={handleAdd}>Add Skill</button>
    </div>
  );
}

export default SkillsForm;
