import React from "react";

/* ===== REUSABLE STYLES (Moved to top) ===== */
const sectionTitleStyle = {
  fontSize: "12px",
  fontWeight: "bold",
  borderBottom: "1px solid #000",
  paddingBottom: "2px",
  marginBottom: "6px",
  textTransform: "uppercase",
};

const rowBetween = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
};

/* ===== SUB-COMPONENT ===== */
function Section({ title, children }) {
  return (
    <section style={{ marginBottom: "12px" }}>
      <div style={sectionTitleStyle}>{title}</div>
      {children}
    </section>
  );
}

/* ===== MAIN COMPONENT ===== */
function ResumePreview({ resumeData }) {
  const {
    personalInfo = {},
    education = [],
    workExperience = [],
    skills = [],
    projects = [],
    interests = "",
  } = resumeData;

  // Helpers for clickable links
  const formatUrl = (url) => {
    if (!url) return "";
    return url.startsWith("http") ? url : `https://${url}`;
  };

  const displayUrl = (url) => {
    if (!url) return "";
    return url.replace(/^(https?:\/\/)?(www\.)?/, "").replace(/\/$/, "");
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#2E5894",
    cursor: "pointer",
  };

  return (
    <div
      id="resume-preview"
      style={{
        fontFamily: "Times New Roman, serif",
        fontSize: "11.5px",
        lineHeight: "1.35",
        color: "#000",
        width: "8.5in",
        minHeight: "11in",
        padding: "0.75in",
        backgroundColor: "#fff",
        margin: "0 auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        boxSizing: "border-box",
      }}
    >
      {/* ===== HEADER ===== */}
      <div style={{ textAlign: "center", marginBottom: "15px" }}>
        <div style={{ fontSize: "22px", fontWeight: "bold" }}>
          {personalInfo.fullName || "Your Name"}
        </div>

        <div style={{ marginTop: "4px", fontSize: "11px" }}>
          {personalInfo.email && (
            <a href={`mailto:${personalInfo.email}`} style={linkStyle}>
              {personalInfo.email}
            </a>
          )}
          {personalInfo.email && personalInfo.phone && " | "}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {(personalInfo.email || personalInfo.phone) && personalInfo.location && " | "}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>

        {(personalInfo.linkedin || personalInfo.github || personalInfo.website) && (
          <div style={{ marginTop: "2px", fontSize: "11px" }}>
            {personalInfo.linkedin && (
              <a href={formatUrl(personalInfo.linkedin)} target="_blank" rel="noreferrer" style={linkStyle}>
                {displayUrl(personalInfo.linkedin)}
              </a>
            )}
            {personalInfo.linkedin && (personalInfo.github || personalInfo.website) && " | "}
            {personalInfo.github && (
              <a href={formatUrl(personalInfo.github)} target="_blank" rel="noreferrer" style={linkStyle}>
                {displayUrl(personalInfo.github)}
              </a>
            )}
            {personalInfo.github && personalInfo.website && " | "}
            {personalInfo.website && (
              <a href={formatUrl(personalInfo.website)} target="_blank" rel="noreferrer" style={linkStyle}>
                {displayUrl(personalInfo.website)}
              </a>
            )}
          </div>
        )}
      </div>

      {/* ===== EDUCATION ===== */}
      <Section title="EDUCATION">
        {education.map((edu, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <div style={rowBetween}>
              <strong style={{ textTransform: "uppercase", fontSize: "11.5px" }}>
                {edu.school || "University Name"}
              </strong>
              <strong style={{ fontSize: "11px" }}>
                {edu.location || "City, State"}
              </strong>
            </div>
            <div style={rowBetween}>
              <div style={{ fontStyle: "italic", fontSize: "11px" }}>
                {edu.degree || "Degree Name"}
                {edu.gpa && `, GPA: ${edu.gpa}`}
              </div>
              <div style={{ fontSize: "11px" }}>
                {edu.graduation_date || "Date"}
              </div>
            </div>
            {edu.honors_awards && (
              <div style={{ fontSize: "10.5px", marginTop: "1px" }}>
                <span style={{ fontStyle: "italic" }}>Honors: </span>{edu.honors_awards}
              </div>
            )}
            {edu.relevant_coursework && (
              <div style={{ fontSize: "10.5px", marginTop: "1px" }}>
                <span style={{ fontStyle: "italic" }}>Coursework: </span>{edu.relevant_coursework}
              </div>
            )}
          </div>
        ))}
      </Section>

      {/* ===== WORK EXPERIENCE ===== */}
      <Section title="EXPERIENCE">
        {workExperience.map((job, index) => (
          <div key={index} style={{ marginBottom: "12px" }}>
            <div style={rowBetween}>
              <strong style={{ fontSize: "11.5px" }}>{job.company}</strong>
              <strong style={{ fontSize: "11px" }}>{job.location}</strong>
            </div>
            <div style={rowBetween}>
              <div style={{ fontStyle: "italic", fontSize: "11px" }}>{job.role}</div>
              <div style={{ fontSize: "11px" }}>{job.duration}</div>
            </div>
            {job.description && (
              <ul style={{ margin: "2px 0 0 20px", padding: 0, listStyleType: "disc", fontSize: "10.5px" }}>
                {job.description.split("\n").filter(Boolean).map((line, i) => (
                  <li key={i} style={{ marginBottom: "1px" }}>
                    {line.trim().replace(/^[•\-\*]\s*/, "")}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </Section>

            {/* ===== SKILLS & INTERESTS ===== */}
      {(skills.length > 0 || interests) && (
        <Section title="SKILLS & INTERESTS">
          <div style={{ fontSize: "10.5px", lineHeight: "1.3" }}>
            {skills.map((skillGroup, i) => (
              (skillGroup.category || skillGroup.list) && (
                <div key={i}>
                  <strong>{skillGroup.category}: </strong>
                  <span>{skillGroup.list}</span>
                </div>
              )
            ))}
            {interests && (
              <div style={{ marginTop: "2px" }}>
                <strong>Interests: </strong><span>{interests}</span>
              </div>
            )}
          </div>
        </Section>
      )}

      

      {/* ===== PROJECTS ===== */}
      {projects.length > 0 && (
  <Section title="PROJECTS">
    {projects.map((project, index) => (
      <div key={index} style={{ marginBottom: "10px" }}>
        {/* Title and Date Row */}
        <div style={rowBetween}>
          <div>
            <strong style={{ fontSize: "11.5px" }}>{project.title}</strong>
            {/* Added Technologies here */}
            {project.technologies && (
              <span style={{ fontSize: "10.5px", fontStyle: "italic", marginLeft: "8px" }}>
                | {project.technologies}
              </span>
            )}
          </div>
          <span style={{ fontSize: "11px" }}>{project.date}</span>
        </div>

        {/* Bullet Points */}
        {project.description && (
          <ul style={{ margin: "2px 0 0 20px", padding: 0, listStyleType: "disc", fontSize: "10.5px" }}>
            {project.description.split("\n").filter(Boolean).map((line, i) => (
              <li key={i} style={{ marginBottom: "1px" }}>
                {line.trim().replace(/^[•\-\*]\s*/, "")}
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </Section>
)}

{resumeData.certifications && resumeData.certifications.length > 0 && (
  <Section title="CERTIFICATIONS">
    {resumeData.certifications.map((cert, index) => (
      <div key={index} style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px", fontSize: "11px" }}>
        <div>
          <strong>{cert.issuer}</strong>: 
          <a 
            href={cert.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: "black", textDecoration: "none", marginLeft: "4px" }}
          >
            {cert.name} <span style={{ fontSize: "9px" }}>↗</span>
          </a>
        </div>
        <span>{cert.date}</span>
      </div>
    ))}
  </Section>
)}
      </div>
  );
}

export default ResumePreview;