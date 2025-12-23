import React from "react";

function ResumePreview({ resumeData }) {
  const { personalInfo, education, experience, skills, projects } = resumeData;

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      {/* Header */}
      <h2>{personalInfo.fullName || "Your Name"}</h2>
      <p>
        {personalInfo.email} | {personalInfo.phone} | {personalInfo.location}
      </p>
      <p>
        {personalInfo.linkedin} {personalInfo.github && `| ${personalInfo.github}`}
      </p>

      <hr />

      {/* Education */}
      <section>
    <h3>Education</h3>

    {education.length === 0 && <p>No education added yet.</p>}

    {education.map((edu, index) => (
        <div key={index}>
        <strong>{edu.degree}</strong> – {edu.institution}
        <div>{edu.year}</div>
        <p>{edu.description}</p>
        </div>
    ))}
    </section>


      {/* Experience */}
      <section>
        <h3>Experience</h3>
        {experience.length === 0 && <p>No experience added yet.</p>}
      </section>

      {/* Skills */}
      <section>
        <h3>Skills</h3>
        {skills.length === 0 && <p>No skills added yet.</p>}
      </section>

      {/* Projects */}
      <section>
        <h3>Projects</h3>
        {projects.length === 0 && <p>No projects added yet.</p>}
      </section>
    </div>
  );
}

export default ResumePreview;
