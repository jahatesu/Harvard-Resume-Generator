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


function PersonalInfoForm({ personalInfo, setResumeData }) {
  const handleChange = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value,
      },
    }));
  };

  return (
    <div style={cardStyle}>
      <h2>Personal Information</h2>

      <label style={labelStyle}>Full Name</label>
      <input
        style={inputStyle}
        value={personalInfo.fullName}
        onChange={e => handleChange("fullName", e.target.value)}
      />

      <label style={labelStyle}>Email</label>
      <input
        style={inputStyle}
        value={personalInfo.email}
        onChange={e => handleChange("email", e.target.value)}
      />

      <label style={labelStyle}>Phone</label>
      <input
        style={inputStyle}
        value={personalInfo.phone}
        onChange={e => handleChange("phone", e.target.value)}
      />

      <label style={labelStyle}>Location</label>
      <input
        style={inputStyle}
        value={personalInfo.location}
        onChange={e => handleChange("location", e.target.value)}
      />

      <label style={labelStyle}>LinkedIn</label>
      <input
        style={inputStyle}
        value={personalInfo.linkedin || ""}
        onChange={e => handleChange("linkedin", e.target.value)}
      />

      <label style={labelStyle}>GitHub</label>
      <input
        style={inputStyle}
        value={personalInfo.github || ""}
        onChange={e => handleChange("github", e.target.value)}
      />
    </div>
  );
}

export default PersonalInfoForm;
