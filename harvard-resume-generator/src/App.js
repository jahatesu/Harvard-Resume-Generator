import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import initialResume from "./data/initialResume";
import PersonalInfoForm from "./components/PersonalInfoForm";
import EducationForm from "./components/EducationForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import SkillsForm from "./components/SkillsForm";
import ProjectsForm from "./components/ProjectsForm";
import ResumePreview from "./components/ResumePreview";
import "./App.css";

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
            interests={resumeData.interests}
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
          <div className="download-section">
            <h3>Ready to Download</h3>
            <p className="download-description">
              Review your resume preview on the right. Click below to download a PDF copy.
            </p>
            <button 
              onClick={downloadPDF}
              className="download-button"
            >
              <span className="button-icon">↓</span>
              Download PDF Resume
            </button>
            <div className="download-note">
              <p>Tip: For best results, use a professional email and ensure all sections are complete.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // =====================
  // STEPPER COMPONENT
  // =====================
  const Stepper = () => {
    const steps = [
      "Personal Info",
      "Education",
      "Experience",
      "Skills",
      "Projects",
      "Download"
    ];
    
    return (
      <div className="stepper-container">
        <div className="stepper">
          {steps.map((label, index) => {
            const stepNumber = index + 1;
            let stepClass = "stepper-step";
            
            if (stepNumber < step) stepClass += " stepper-step-completed";
            else if (stepNumber === step) stepClass += " stepper-step-active";
            else stepClass += " stepper-step-pending";
            
            return (
              <div key={stepNumber} className={stepClass}>
                <div className="stepper-circle">
                  {stepNumber < step ? "✓" : stepNumber}
                </div>
                <span className="stepper-label">{label}</span>
              </div>
            );
          })}
        </div>
        <div className="stepper-line"></div>
      </div>
    );
  };

  // =====================
  // MAIN LAYOUT
  // =====================
  return (
    <div className="app-container">
      {/* ================= LEFT: FORM (40%) ================= */}
      <div className="form-container">
        <div className="form-header">
          <h1 className="app-title">Harvard Resume Generator</h1>
          <p className="app-subtitle">Create a professional Harvard-style resume in minutes</p>
        </div>
        
        <Stepper />
        
        <div className="step-content">
          {renderStep()}
        </div>
        
        {/* NAVIGATION */}
        <div className="navigation-container">
          <div className="navigation-buttons">
            {step > 1 && (
              <button onClick={prevStep} className="nav-button nav-button-back">
                ← Back
              </button>
            )}
            {step < 6 && (
              <button onClick={nextStep} className="nav-button nav-button-next">
                Continue →
              </button>
            )}
          </div>
          
          <div className="step-indicator">
            <span className="step-text">Step {step} of 6</span>
            <div className="step-progress">
              <div 
                className="step-progress-bar" 
                style={{ width: `${(step / 6) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="form-footer">
          <p className="footer-note">
            <strong>Harvard Style Tip:</strong> Keep descriptions concise and action-oriented. Use Times New Roman for final output.
          </p>
        </div>
      </div>
      
      {/* ================= RIGHT: PREVIEW (60%) ================= */}
      <div className="preview-container">
        <div className="preview-header">
          <h2 className="preview-title">Live Preview</h2>
          <p className="preview-subtitle">Harvard Format - Times New Roman</p>
        </div>
        
        <div className="page-container">
          <div className="page-shadow">
            <ResumePreview resumeData={resumeData} />
          </div>
        </div>
        
        <div className="preview-footer">
          <p className="preview-note">
            This preview matches the exact Harvard resume format used by top employers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;