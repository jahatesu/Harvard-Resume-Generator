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

const CertificationsForm = ({ certifications, setResumeData }) => {
  const handleChange = (index, field, value) => {
    const updatedCerts = [...certifications];
    updatedCerts[index][field] = value;
    setResumeData(prev => ({ ...prev, certifications: updatedCerts }));
  };

  const addCert = () => {
    setResumeData(prev => ({
      ...prev,
      certifications: [...prev.certifications, { name: "", issuer: "", date: "", url: "" }]
    }));
  };

  return (
    <div style={cardStyle}>
    <div className="form-section">
      <h3>Certifications</h3>
      {certifications.map((cert, index) => (
        <div key={index} className="form-group-border">

        <label style={labelStyle}>Certification Name *</label>    
          <input 
            style={inputStyle}
            className="form-input" 
            placeholder="Certification Name (e.g. AWS Certified)" 
            value={cert.name} 
            onChange={(e) => handleChange(index, "name", e.target.value)} 
          />

          <label style={labelStyle}>Issuing Organization *</label>
          <input
            style={inputStyle} 
            className="form-input" 
            placeholder="Issuing Organization" 
            value={cert.issuer} 
            onChange={(e) => handleChange(index, "issuer", e.target.value)} 
          />
          <div className="form-row">

            <label style={labelStyle}>Date *</label>
            <input 
             style={inputStyle}
              className="form-input" 
              placeholder="Date" 
              value={cert.date} 
              onChange={(e) => handleChange(index, "date", e.target.value)} 
            />

            <label style={labelStyle}>Verification URL (Link) *</label>
            <input 
            style={inputStyle}
              className="form-input" 
              placeholder="Verification URL (Link)" 
              value={cert.url} 
              onChange={(e) => handleChange(index, "url", e.target.value)} 
            />
          </div>
        </div>
      ))}
      <button className="btn-add" 
      onClick={addCert} 
      style={{ ...actionButtonStyle, backgroundColor: "#4CAF50", color: "white", width: "100%", marginBottom: "20px" }}>
         + Add Certification
      
      </button>
    </div>
    </div>
  );
};

export default CertificationsForm;