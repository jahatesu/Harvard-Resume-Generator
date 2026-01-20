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

function EducationForm({ education, setResumeData }) {
  const handleChange = (index, field, value) => {
    setResumeData(prev => {
      const updated = [...prev.education];
      updated[index][field] = value;
      return { ...prev, education: updated };
    });
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, { school: "", degree: "", year: "" }],
    }));
  };

  const removeEducation = index => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  return (
    <div style={cardStyle}>
      <h2>Education</h2>

      {education.map((edu, index) => (
        <div key={index} style={{ marginBottom: "12px" }}>
          <label style={labelStyle}>School</label>
          <input
            style={inputStyle}
            value={edu.school}
            onChange={e => handleChange(index, "school", e.target.value)}
          />

          <label style={labelStyle}>Degree</label>
          <input
            style={inputStyle}
            value={edu.degree}
            onChange={e => handleChange(index, "degree", e.target.value)}
          />

          <label style={labelStyle}>Year</label>
          <input
            style={inputStyle}
            value={edu.year}
            onChange={e => handleChange(index, "year", e.target.value)}
          />

          <button onClick={() => removeEducation(index)}>Remove</button>
        </div>
      ))}

      <button onClick={addEducation}>+ Add Education</button>
    </div>
  );
}

export default EducationForm;
