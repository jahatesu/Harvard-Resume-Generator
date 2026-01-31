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
    setResumeData(prev => {
      const updatedCerts = [...prev.certifications];
      updatedCerts[index] = { ...updatedCerts[index], [field]: value };
      return { ...prev, certifications: updatedCerts };
    });
  };

  const addCert = () => {
    setResumeData(prev => ({
      ...prev,
      certifications: [...(prev.certifications || []), { name: "", issuer: "", date: "", url: "" }]
    }));
  };

  const removeCert = (index) => {
    setResumeData(prev => ({
      ...prev,
      certifications: prev.certifications.filter((_, i) => i !== index)
    }));
  };

  // Logic to ensure the URL is absolute so it doesn't redirect to your internal project
  const formatUrl = (url) => {
    if (!url) return "#";
    return url.startsWith("http") ? url : `https://${url}`;
  };

  return (
    <div style={cardStyle}>
      <div className="form-section">
        <h2 style={{ marginTop: 0, fontSize: "20px", marginBottom: "20px" }}>Certifications</h2>
        
        {certifications.map((cert, index) => (
          <div key={index} style={{ 
            marginBottom: "25px", 
            padding: "15px", 
            border: "1px dashed #ccc", 
            borderRadius: "8px" 
          }}>
            <label style={labelStyle}>Certification Name *</label>
            <input 
              style={inputStyle}
              placeholder="e.g. AWS Certified Solutions Architect" 
              value={cert.name || ""} 
              onChange={(e) => handleChange(index, "name", e.target.value)} 
            />

            <label style={labelStyle}>Issuing Organization *</label>
            <input
              style={inputStyle} 
              placeholder="e.g. Amazon Web Services" 
              value={cert.issuer || ""} 
              onChange={(e) => handleChange(index, "issuer", e.target.value)} 
            />

            <label style={labelStyle}>Date *</label>
            <input 
              style={inputStyle}
              placeholder="e.g. Jan 2023" 
              value={cert.date || ""} 
              onChange={(e) => handleChange(index, "date", e.target.value)} 
            />

            <label style={labelStyle}>Verification URL (Link) *</label>
            <input 
              style={inputStyle}
              placeholder="e.g. credly.com/certs/..." 
              value={cert.url || ""} 
              onChange={(e) => handleChange(index, "url", e.target.value)} 
            />

            {/* Live Link Preview: This shows the user if the link works */}
            {cert.url && (
              <div style={{ marginBottom: "10px" }}>
                <a 
                  href={formatUrl(cert.url)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ fontSize: "11px", color: "#2563eb", textDecoration: "none" }}
                >
                  🔗 Test Link: {cert.url.substring(0, 30)}...
                </a>
              </div>
            )}

            {certifications.length > 0 && (
              <button 
                onClick={() => removeCert(index)}
                style={{ ...actionButtonStyle, backgroundColor: "#ff4d4d", color: "white" }}
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <button 
          onClick={addCert} 
          style={{ ...actionButtonStyle, backgroundColor: "#4CAF50", color: "white", width: "100%", marginBottom: "20px" }}
        >
          + Add Certification
        </button>
      </div>
    </div>
  );
};

export default CertificationsForm;