import React from "react";

function ResumePreview({ resumeData }) {
  const {
    personalInfo,
    education,
    workExperience,
    skills,
    projects,
  } = resumeData;

  return (
    <div
      id="resume-preview"
      style={{
        fontFamily: "Times New Roman, serif",
        fontSize: "12px",
        lineHeight: "1.4",
        color: "#000",
        width: "8.5in",
        minHeight: "11in",
        padding: "0.75in",
        backgroundColor: "white",
      }}
    >
      {/* ===== HEADER ===== */}
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <h1 style={{ fontSize: "20px", margin: 0 }}>
          {personalInfo.fullName || "Your Name"}
        </h1>
        <p style={{ margin: "4px 0" }}>
          {personalInfo.email}
          {personalInfo.phone && ` | ${personalInfo.phone}`}
          {personalInfo.location && ` | ${personalInfo.location}`}
        </p>
        <p style={{ margin: 0 }}>
          {personalInfo.linkedin}
          {personalInfo.github && ` | ${personalInfo.github}`}
        </p>
      </div>

      {/* ===== EDUCATION ===== */}
      <section style={{ marginBottom: "16px" }}>
        <h2 style={sectionTitle}>Education</h2>

        {education.map((edu, index) => (
          <div key={index} style={{ marginBottom: "8px" }}>
            <strong>{edu.school}</strong>
            <div>
              {edu.degree}
              {edu.year && `, ${edu.year}`}
            </div>
          </div>
        ))}
      </section>

      {/* ===== WORK EXPERIENCE ===== */}
      <section style={{ marginBottom: "16px" }}>
        <h2 style={sectionTitle}>Work Experience</h2>

        {workExperience.map((job, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>{job.role}</strong>
              <span>{job.duration}</span>
            </div>
            <div><em>{job.company}</em></div>
            <p style={{ margin: "4px 0" }}>{job.description}</p>
          </div>
        ))}
      </section>

      {/* ===== SKILLS ===== */}
      {skills && skills.length > 0 && (
        <section style={{ marginBottom: "16px" }}>
          <h2 style={sectionTitle}>Skills</h2>
          <p>{skills.join(", ")}</p>
        </section>
      )}

      {/* ===== PROJECTS ===== */}
      {projects && projects.length > 0 && (
        <section>
          <h2 style={sectionTitle}>Projects</h2>

          {projects.map((project, index) => (
            <div key={index} style={{ marginBottom: "8px" }}>
              <strong>{project.title}</strong>
              <p style={{ margin: "4px 0" }}>{project.description}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

const sectionTitle = {
  fontSize: "14px",
  fontWeight: "bold",
  borderBottom: "1px solid #000",
  marginBottom: "8px",
};

export default ResumePreview;
