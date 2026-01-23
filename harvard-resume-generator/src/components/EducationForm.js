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

function EducationForm({ education, setResumeData, onNext, onBack }) {
  
  const handleChange = (index, field, value) => {
    setResumeData(prev => {
      const updated = [...prev.education];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, education: updated };
    });
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [
        ...prev.education, 
        { school: "", location: "", degree: "", graduation_date: "", gpa: "", honors_awards: "", relevant_coursework: "" }
      ],
    }));
  };

  const removeEducation = index => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  // Step-Locking Logic: Ensure at least one school is filled out
  const canProceed = education.length > 0 && education.every(edu => 
    edu.school.trim() !== "" && 
    edu.degree.trim() !== "" && 
    (edu.graduation_date?.trim() !== "" || edu.year?.trim() !== "")
  );

  return (
    <div style={cardStyle}>
      <h2 style={{ marginTop: 0, fontSize: "20px" }}>Education</h2>
      <p style={{ fontSize: "12px", color: "#666", marginBottom: "20px" }}>
        List your degrees in reverse-chronological order.
      </p>

      {education.map((edu, index) => (
        <div key={index} style={{ 
          marginBottom: "25px", 
          padding: "15px", 
          border: "1px dashed #ccc", 
          borderRadius: "8px",
          position: "relative"
        }}>
          <label style={labelStyle}>School Name *</label>
          <input
            style={inputStyle}
            placeholder="Harvard University"
            value={edu.school}
            onChange={e => handleChange(index, "school", e.target.value)}
          />

          <label style={labelStyle}>Location *</label>
          <input
            style={inputStyle}
            placeholder="Cambridge, MA"
            value={edu.location}
            onChange={e => handleChange(index, "location", e.target.value)}
          />

          <label style={labelStyle}>Degree & Major *</label>
          <input
            style={inputStyle}
            placeholder="Bachelor of Arts in Economics"
            value={edu.degree}
            onChange={e => handleChange(index, "degree", e.target.value)}
          />

          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Graduation Date *</label>
              <input
                style={inputStyle}
                placeholder="May 2024"
                value={edu.graduation_date || edu.year}
                onChange={e => handleChange(index, "graduation_date", e.target.value)}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>GPA (Optional)</label>
              <input
                style={inputStyle}
                placeholder="3.9/4.0"
                value={edu.gpa}
                onChange={e => handleChange(index, "gpa", e.target.value)}
              />
            </div>
          </div>

          <label style={labelStyle}>Honors & Awards</label>
          <input
            style={inputStyle}
            placeholder="cum laude, Dean's List (4 semesters)"
            value={edu.honors_awards}
            onChange={e => handleChange(index, "honors_awards", e.target.value)}
          />

          <label style={labelStyle}>Relevant Coursework</label>
          <input
            style={inputStyle}
            placeholder="Microeconomics, Financial Accounting, etc."
            value={edu.relevant_coursework}
            onChange={e => handleChange(index, "relevant_coursework", e.target.value)}
          />

          {education.length > 1 && (
            <button 
              onClick={() => removeEducation(index)}
              style={{ ...actionButtonStyle, backgroundColor: "#ff4d4d", color: "white" }}
            >
              Remove School
            </button>
          )}
        </div>
      ))}

      <button 
        onClick={addEducation}
        style={{ ...actionButtonStyle, backgroundColor: "#4CAF50", color: "white", width: "100%", marginBottom: "20px" }}
      >
        + Add Another School
      </button>

      <div style={{ display: "flex", gap: "10px" }}>
      </div>
    </div>
  );
}

export default EducationForm;