import React, { useState, useEffect } from "react";
import html2pdf from "html2pdf.js";
import initialResume from "./data/initialResume";
import PersonalInfoForm from "./components/PersonalInfoForm";
import EducationForm from "./components/EducationForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import SkillsForm from "./components/SkillsForm";
import ProjectsForm from "./components/ProjectsForm";
import CertificationsForm from "./components/CertificationsForm";
import ResumePreview from "./components/ResumePreview";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [resumeData, setResumeData] = useState(initialResume);

  useEffect(() => {
    const savedData = localStorage.getItem("resume_draft");
    if (savedData) {
      try {
        setResumeData(JSON.parse(savedData));
      } catch (e) {
        console.error("Failed to parse local storage data", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("resume_draft", JSON.stringify(resumeData));
  }, [resumeData]);

  const nextStep = () => setStep(prev => Math.min(prev + 1, 7));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const downloadPDF = () => {
    const element = document.getElementById("resume-preview");
    if (!element) return;
    
    html2pdf()
      .set({
        margin: 0,
        filename: `${resumeData.personalInfo.fullName || "Resume"}.pdf`,
        html2canvas: { scale: 3, useCORS: true },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .from(element)
      .save();
  };

  const renderStep = () => {
    switch (step) {
      case 1: return <PersonalInfoForm personalInfo={resumeData.personalInfo} setResumeData={setResumeData} />;
      case 2: return <EducationForm education={resumeData.education} setResumeData={setResumeData} />;
      case 3: return <WorkExperienceForm workExperience={resumeData.workExperience} setResumeData={setResumeData} />;
      case 4: return <SkillsForm skills={resumeData.skills} interests={resumeData.interests} setResumeData={setResumeData} />;
      case 5: return <ProjectsForm projects={resumeData.projects} setResumeData={setResumeData} />;
      case 6: return <CertificationsForm certifications={resumeData.certifications || []} setResumeData={setResumeData} />;
      case 7:
        return (
          <div className="download-section">
            <div className="success-icon">✓</div>
            <h3>Resume Complete!</h3>
            <p className="download-description">
              Your professional resume is ready. Review the live preview and download your high-resolution PDF below.
            </p>
            <button onClick={downloadPDF} className="download-button">
              Download PDF
            </button>
          </div>
        );
      default: return null;
    }
  };

  const Stepper = () => {
    const steps = ["General", "Education", "Work", "Skills", "Projects", "Certifications", "Finish"];
    return (
      <div className="stepper-wrapper">
        <div className="stepper-dots">
          {steps.map((_, index) => (
            <div 
              key={index} 
              className={`dot ${index + 1 === step ? 'active' : ''} ${index + 1 < step ? 'completed' : ''}`}
            />
          ))}
        </div>
        <div className="stepper-label-main">{steps[step - 1]}</div>
      </div>
    );
  };

  return (
    <div className="app-workspace">
      <aside className="editor-sidebar">
        <header className="sidebar-header">
          <h1 className="brand-logo">Harvard<span>ed</span></h1>
          <Stepper />
        </header>
        
        <main className="form-viewport">
          {renderStep()}
        </main>
        
        <footer className="sidebar-footer">
          <div className="nav-group">
            {step > 1 && <button onClick={prevStep} className="btn-secondary">Back</button>}
            {step < 7 && <button onClick={nextStep} className="btn-primary">Continue</button>}
          </div>
          <div className="progress-mini">
            <div className="progress-fill" style={{ width: `${(step / 7) * 100}%` }}></div>
          </div>
          
          {/* Creator Credit Link */}
          <div className="creator-credit">
            Created by <a href="www.linkedin.com/in/janna-justiniano" target="_blank" rel="noopener noreferrer">Janna Justiniano</a>
          </div>
        </footer>
      </aside>

      <section className="preview-viewport">
        <div className="preview-controls">
          <span className="badge">Draft Mode</span>
          <span className="preview-filename">{resumeData.personalInfo.fullName || "Untitled"}.pdf</span>
        </div>
        <div className="document-canvas">
          {/* Subtle UI-only Watermark */}
          <div className="preview-watermark-overlay">
            Harvarded by Janna Justiniano.
          </div>
          
          <div className="page-sheet" id="resume-preview">
            <ResumePreview resumeData={resumeData} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;