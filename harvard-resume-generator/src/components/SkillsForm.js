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

const buttonStyle = {
  padding: "6px 10px",
  marginRight: "8px",
  cursor: "pointer",
};

function SkillsForm({ skills = [], setResumeData }) {
  const handleChange = (index, value) => {
    setResumeData(prev => {
      const updated = [...prev.skills];
      updated[index] = value;
      return { ...prev, skills: updated };
    });
  };

  const addSkill = () => {
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, ""],
    }));
  };

  const removeSkill = index => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  return (
    <div style={cardStyle}>
      <h2>Skills</h2>

      {skills.map((skill, index) => (
        <div key={index}>
          <input
            style={inputStyle}
            placeholder="e.g. JavaScript, React, SQL"
            value={skill}
            onChange={e => handleChange(index, e.target.value)}
          />
          <button
            style={buttonStyle}
            onClick={() => removeSkill(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <button style={buttonStyle} onClick={addSkill}>
        + Add Skill
      </button>
    </div>
  );
}


export default SkillsForm;
