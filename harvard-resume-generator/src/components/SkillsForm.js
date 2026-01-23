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

function SkillsForm({ skills = [], interests = "", setResumeData, onNext, onBack }) {
  
  const handleSkillChange = (index, field, value) => {
    setResumeData(prev => {
      const updated = [...prev.skills];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, skills: updated };
    });
  };

  // FIXED: Standardized to handle the event object from the textarea
  const handleInterestsChange = (e) => {
    const value = e.target.value;
    setResumeData(prev => ({ 
      ...prev, 
      interests: value 
    }));
  };

  const addSkillGroup = () => {
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, { category: "", list: "" }],
    }));
  };

  const removeSkillGroup = index => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  // Validation: Button enabled if at least one skill group has content
  const canProceed = skills.length > 0 && skills.some(s => s.category.trim() !== "" && s.list.trim() !== "");

  return (
    <div style={cardStyle}>
      <h2 style={{ marginTop: 0, fontSize: "20px" }}>Skills & Interests</h2>
      <p style={{ fontSize: "12px", color: "#666", marginBottom: "20px" }}>
        Group skills by category (e.g., Technical, Languages, Software).
      </p>

      {/* Skill Groups Mapping */}
      {skills.map((skill, index) => (
        <div key={index} style={{ 
          marginBottom: "15px", 
          padding: "15px", 
          border: "1px solid #eee", 
          borderRadius: "8px",
          background: "#fff" 
        }}>
          <label style={labelStyle}>Category (e.g., Technical Skills)</label>
          <input
            style={inputStyle}
            placeholder="Technical / Languages / Certifications"
            value={skill.category}
            onChange={e => handleSkillChange(index, "category", e.target.value)}
          />

          <label style={labelStyle}>Skills (comma separated)</label>
          <input
            style={inputStyle}
            placeholder="Python, SQL, React, Tableau"
            value={skill.list}
            onChange={e => handleSkillChange(index, "list", e.target.value)}
          />

          <button 
            type="button"
            onClick={() => removeSkillGroup(index)}
            style={{ ...actionButtonStyle, backgroundColor: "#ff4d4d", color: "white" }}
          >
            Remove Category
          </button>
        </div>
      ))}

      <button 
        type="button"
        onClick={addSkillGroup}
        style={{ ...actionButtonStyle, backgroundColor: "#4CAF50", color: "white", width: "100%", marginBottom: "20px" }}
      >
        + Add Skill Category
      </button>

      <hr style={{ margin: "20px 0", border: "0", borderTop: "1px solid #ddd" }} />

      <label style={labelStyle}>Interests (Optional)</label>
      <textarea
        style={{ ...inputStyle, height: "80px", resize: "vertical" }}
        placeholder="e.g. Marathon running, Chess, Historical Biographies"
        value={interests}
        onChange={handleInterestsChange}
      />
      <p style={{ fontSize: "11px", color: "#777", marginBottom: "20px" }}>
        Harvard style encourages 1-2 lines of genuine interests to make you memorable.
      </p>

      {/* RESTORED NAVIGATION BUTTONS */}
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
      </div>
    </div>
  );
}

export default SkillsForm;