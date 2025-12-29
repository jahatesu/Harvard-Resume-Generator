import React from "react";
import { jsPDF } from "jspdf";

function ExportButton({ resumeData }) {
  const handleExport = () => {
    const doc = new jsPDF();

    let y = 10; // starting vertical position

    // Personal Info
    doc.setFontSize(18);
    doc.text(resumeData.personalInfo.fullName || "Your Name", 10, y);
    y += 10;
    doc.setFontSize(12);
    doc.text(
      `${resumeData.personalInfo.email || ""} | ${resumeData.personalInfo.phone || ""} | ${resumeData.personalInfo.location || ""}`,
      10,
      y
    );
    y += 10;
    if (resumeData.personalInfo.linkedin) {
      doc.text(`LinkedIn: ${resumeData.personalInfo.linkedin}`, 10, y);
      y += 10;
    }
    if (resumeData.personalInfo.github) {
      doc.text(`GitHub: ${resumeData.personalInfo.github}`, 10, y);
      y += 10;
    }

    y += 5;

    // Education
    doc.setFontSize(14);
    doc.text("Education", 10, y);
    y += 8;
    resumeData.education.forEach((edu) => {
      doc.setFontSize(12);
      doc.text(`${edu.degree || ""} – ${edu.school || ""} (${edu.year || ""})`, 10, y);
      y += 6;
      if (edu.description) {
        doc.text(edu.description, 10, y);
        y += 6;
      }
      y += 2;
    });

    // Work Experience
    doc.setFontSize(14);
    doc.text("Work Experience", 10, y);
    y += 8;
    resumeData.workExperience.forEach((job) => {
      doc.setFontSize(12);
      doc.text(`${job.role || ""} – ${job.company || ""} (${job.duration || ""})`, 10, y);
      y += 6;
      if (job.description) {
        doc.text(job.description, 10, y);
        y += 6;
      }
      y += 2;
    });

    // Skills
    if (resumeData.skills && resumeData.skills.length > 0) {
      doc.setFontSize(14);
      doc.text("Skills", 10, y);
      y += 8;
      doc.setFontSize(12);
      doc.text(resumeData.skills.join(", "), 10, y);
      y += 10;
    }

    // Projects
    if (resumeData.projects && resumeData.projects.length > 0) {
      doc.setFontSize(14);
      doc.text("Projects", 10, y);
      y += 8;
      resumeData.projects.forEach((project) => {
        doc.setFontSize(12);
        doc.text(`${project.name || ""}`, 10, y);
        y += 6;
        if (project.description) {
          doc.text(project.description, 10, y);
          y += 6;
        }
        y += 2;
      });
    }

    // Save PDF
    doc.save("resume.pdf");
  };

  return <button onClick={handleExport}>Download PDF</button>;
}

export default ExportButton;
