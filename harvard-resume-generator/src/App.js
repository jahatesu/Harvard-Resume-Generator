import React, { useState } from "react";
import html2pdf from "html2pdf.js";

import initialResume from "./data/initialResume";

import PersonalInfoForm from "./components/PersonalInfoForm";
import EducationForm from "./components/EducationForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import SkillsForm from "./components/SkillsForm";
import ProjectsForm from "./components/ProjectsForm";
import ResumePreview from "./components/ResumePreview";

function App() {
  const [resumeData, setResumeData] = useState(initialResume);

  const downloadPDF = () => {
    const element = document.getElementById("resume-preview");

    const opt = {
      margin: 0,
      filename: `${resumeData.personalInfo.fullName || "Resume"}.pdf`,
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 2,
        useCORS: true,
      },
      jsPDF: {
        unit: "in",
        format: "letter",
        orientation: "portrait",
      },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        padding: "20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* ===== LEFT SIDE: FORMS ===== */}
      <div style={{ flex: 1 }}>
        <h1>Harvard Resume Generator</h1>

        <PersonalInfoForm
          personalInfo={resumeData.personalInfo}
          setResumeData={setResumeData}
        />

        <EducationForm
          education={resumeData.education}
          setResumeData={setResumeData}
        />

        <WorkExperienceForm
          workExperience={resumeData.workExperience}
          setResumeData={setResumeData}
        />

        <SkillsForm
          skills={resumeData.skills}
          setResumeData={setResumeData}
        />

        <ProjectsForm
          projects={resumeData.projects}
          setResumeData={setResumeData}
        />

        <button
          onClick={downloadPDF}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Download PDF
        </button>
      </div>

      {/* ===== RIGHT SIDE: PREVIEW ===== */}
      <div style={{ flex: 1 }}>
        <h2>Resume Preview</h2>
        <ResumePreview resumeData={resumeData} />
      </div>
    </div>
  );
}

export default App;
