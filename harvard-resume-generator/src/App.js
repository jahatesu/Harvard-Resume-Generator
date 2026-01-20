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
  const [step, setStep] = useState(1);
  const [resumeData, setResumeData] = useState(initialResume);

  // =====================
  // STEP NAVIGATION
  // =====================
  const nextStep = () => setStep(prev => Math.min(prev + 1, 6));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  // =====================
  // PDF DOWNLOAD
  // =====================
  const downloadPDF = () => {
    const element = document.getElementById("resume-preview");
    if (!element) return;

    html2pdf()
      .set({
        margin: 0,
        filename: `${resumeData.personalInfo.fullName || "Resume"}.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .from(element)
      .save();
  };

  // =====================
  // STEP RENDERING
  // =====================
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfoForm
            personalInfo={resumeData.personalInfo}
            setResumeData={setResumeData}
          />
        );
      case 2:
        return (
          <EducationForm
            education={resumeData.education}
            setResumeData={setResumeData}
          />
        );
      case 3:
        return (
          <WorkExperienceForm
            workExperience={resumeData.workExperience}
            setResumeData={setResumeData}
          />
        );
      case 4:
        return (
          <SkillsForm
            skills={resumeData.skills}
            setResumeData={setResumeData}
          />
        );
      case 5:
        return (
          <ProjectsForm
            projects={resumeData.projects}
            setResumeData={setResumeData}
          />
        );
      case 6:
        return (
          <button
            onClick={downloadPDF}
            style={{
              padding: "12px",
              width: "100%",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Download PDF
          </button>
        );
      default:
        return null;
    }
  };

  // =====================
  // MAIN LAYOUT
  // =====================
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {/* ================= LEFT: FORM (40–50%) ================= */}
      <div
        style={{
          flex: "0 0 45%",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "6px",
          boxShadow: "0 0 10px rgba(0,0,0,0.05)",
        }}
      >
        <h2>Build Your Resume</h2>

        {renderStep()}

        {/* NAVIGATION */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          {step > 1 && (
            <button onClick={prevStep}>
              ← Back
            </button>
          )}

          {step < 6 && (
            <button onClick={nextStep}>
              Next →
            </button>
          )}
        </div>

        <p style={{ marginTop: "10px", textAlign: "center" }}>
          Step {step} of 6
        </p>
      </div>

      {/* ================= RIGHT: STICKY PREVIEW ================= */}
      <div
        style={{
          flex: "0 0 55%",
          position: "sticky",
          top: "20px",
          alignSelf: "flex-start",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "6px",
          boxShadow: "0 0 10px rgba(0,0,0,0.05)",
          height: "fit-content",
        }}
      >
        <ResumePreview resumeData={resumeData} />
      </div>
    </div>
  );
}

export default App;
