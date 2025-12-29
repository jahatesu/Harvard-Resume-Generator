import React, { useState } from "react";
import initialResume from "./data/initialResume";

import PersonalInfoForm from "./components/PersonalInfoForm";
import EducationForm from "./components/EducationForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import SkillsForm from "./components/SkillsForm";
import ProjectsForm from "./components/ProjectsForm";
import ResumePreview from "./components/ResumePreview";
import ExportButton from "./components/ExportButton";

function App() {
  const [resumeData, setResumeData] = useState(initialResume);

  return (
    <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
      {/* LEFT SIDE: FORMS */}
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

        <ExportButton resumeData={resumeData} />
      </div>

      {/* RIGHT SIDE: PREVIEW */}
      <div style={{ flex: 1 }}>
        <h2>Resume Preview</h2>
        <ResumePreview resumeData={resumeData} />
      </div>
    </div>
  );
}

export default App;
