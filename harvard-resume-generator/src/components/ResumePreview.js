import React from "react";

function ResumePreview({ resumeData }) {
  const {
    personalInfo,
    education = [],
    workExperience = [],
    skills = [],
    projects = [],
  } = resumeData;

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
      }}
    >
      {/* ===== HEADER ===== */}
      <div style={{ textAlign: "center", marginBottom: "12px" }}>
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          {personalInfo.fullName || "YOUR NAME"}
        </div>

        <div style={{ marginTop: "4px" }}>
          {personalInfo.email}
          {personalInfo.phone && ` | ${personalInfo.phone}`}
          {personalInfo.location && ` | ${personalInfo.location}`}
        </div>

        {(personalInfo.linkedin || personalInfo.github) && (
          <div style={{ marginTop: "2px" }}>
            {personalInfo.linkedin}
            {personalInfo.github && ` | ${personalInfo.github}`}
          </div>
        )}
      </div>

      {/* ===== EDUCATION ===== */}
      <Section title="EDUCATION">
        {education.map((edu, index) => (
          <div key={index} style={{ marginBottom: "6px" }}>
            <div style={rowBetween}>
              <strong>{edu.school}</strong>
              <span>{edu.year}</span>
            </div>
            <div>{edu.degree}</div>
          </div>
        ))}
      </Section>

      {/* ===== WORK EXPERIENCE ===== */}
      <Section title="WORK EXPERIENCE">
        {workExperience.map((job, index) => (
          <div key={index} style={{ marginBottom: "8px" }}>
            <div style={rowBetween}>
              <strong>{job.role}</strong>
              <span>{job.duration}</span>
            </div>
            <div style={{ fontStyle: "italic" }}>{job.company}</div>
            {job.description && (
              <ul style={bulletList}>
                {job.description
                  .split("\n")
                  .filter(Boolean)
                  .map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
              </ul>
            )}
          </div>
        ))}
      </Section>

      {/* ===== SKILLS ===== */}
      {skills.length > 0 && (
        <Section title="SKILLS">
          <div>{skills.join(", ")}</div>
        </Section>
      )}

      {/* ===== PROJECTS ===== */}
      {projects.length > 0 && (
        <Section title="PROJECTS">
          {projects.map((project, index) => (
            <div key={index} style={{ marginBottom: "6px" }}>
              <strong>{project.title}</strong>
              <div>{project.description}</div>
            </div>
          ))}
        </Section>
      )}
    </div>
  );
}

/* ===== REUSABLE STYLES ===== */

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: "12px" }}>
      <div style={sectionTitle}>{title}</div>
      {children}
    </section>
  );
}

const sectionTitle = {
  fontSize: "12px",
  fontWeight: "bold",
  borderBottom: "1px solid #000",
  paddingBottom: "2px",
  marginBottom: "6px",
};

const rowBetween = {
  display: "flex",
  justifyContent: "space-between",
};

const bulletList = {
  margin: "4px 0 0 16px",
  padding: 0,
};

export default ResumePreview;
