import React, { useState } from "react";

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
  marginBottom: "4px", // Reduced to make room for error text
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
  marginTop: "8px"
};

const errorTextStyle = {
  color: "#d93025",
  fontSize: "11px",
  marginBottom: "8px",
  display: "block"
};

// HELPER: Validation logic
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validateUrl = (url, platform) => {
  if (!url) return true; // Optional fields are valid if empty
  return url.toLowerCase().includes(platform);
};

function PersonalInfoForm({ personalInfo, setResumeData, onNext }) {
  
  // Local state to track if a user has "touched" a field (so errors don't show immediately)
  const [touched, setTouched] = useState({});

  const handleChange = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value },
    }));
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  // Validation state
  const errors = {
    email: touched.email && !validateEmail(personalInfo.email),
    linkedin: touched.linkedin && personalInfo.linkedin && !validateUrl(personalInfo.linkedin, "linkedin.com"),
    github: touched.github && personalInfo.github && !validateUrl(personalInfo.github, "github.com"),
  };

  // Step-Locking Logic
  const isRequiredFilled = 
    personalInfo.fullName?.trim() !== "" &&
    personalInfo.email?.trim() !== "" &&
    personalInfo.phone?.trim() !== "" &&
    personalInfo.location?.trim() !== "";

  const hasErrors = Object.values(errors).some(v => v === true);
  const canProceed = isRequiredFilled && !hasErrors;

  return (
    <div style={cardStyle}>
      <h2 style={{ marginTop: 0, fontSize: "20px" }}>Personal Information</h2>
      <p style={{ fontSize: "12px", color: "#666", marginBottom: "20px" }}>* Required fields</p>

      <label style={labelStyle}>Full Name *</label>
      <input
        style={inputStyle}
        placeholder="John Doe"
        value={personalInfo.fullName}
        onChange={e => handleChange("fullName", e.target.value)}
      />

      <label style={labelStyle}>Email *</label>
      <input
        style={{...inputStyle, borderColor: errors.email ? "#d93025" : "#ddd"}}
        type="email"
        placeholder="j.doe@college.harvard.edu"
        value={personalInfo.email}
        onChange={e => handleChange("email", e.target.value)}
        onBlur={() => handleBlur("email")}
      />
      {errors.email && <span style={errorTextStyle}>Please enter a valid email address</span>}

      <label style={labelStyle}>Phone *</label>
      <input
        style={inputStyle}
        placeholder="(123) 456-7890"
        value={personalInfo.phone}
        onChange={e => handleChange("phone", e.target.value)}
      />

      <label style={labelStyle}>Location *</label>
      <input
        style={inputStyle}
        placeholder="Cambridge, MA"
        value={personalInfo.location}
        onChange={e => handleChange("location", e.target.value)}
      />

      <label style={labelStyle}>LinkedIn URL (Optional)</label>
      <input
        style={{...inputStyle, borderColor: errors.linkedin ? "#d93025" : "#ddd"}}
        placeholder="linkedin.com/in/johndoe"
        value={personalInfo.linkedin || ""}
        onChange={e => handleChange("linkedin", e.target.value)}
        onBlur={() => handleBlur("linkedin")}
      />
      {errors.linkedin && <span style={errorTextStyle}>Please enter a valid link</span>}

      <label style={labelStyle}>GitHub URL (Optional)</label>
      <input
        style={{...inputStyle, borderColor: errors.github ? "#d93025" : "#ddd"}}
        placeholder="github.com/johndoe"
        value={personalInfo.github || ""}
        onChange={e => handleChange("github", e.target.value)}
        onBlur={() => handleBlur("github")}
      />
      {errors.github && <span style={errorTextStyle}>Please enter a valid link</span>}

      <label style={labelStyle}>Personal Website / Portfolio (Optional)</label>
      <input
        style={inputStyle}
        placeholder="johndoe.com"
        value={personalInfo.website || ""}
        onChange={e => handleChange("website", e.target.value)}
      />

    </div>
  );
}

export default PersonalInfoForm;