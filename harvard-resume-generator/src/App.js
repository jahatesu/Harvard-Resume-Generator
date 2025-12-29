import React, { useState } from "react";
import initialResume from "./data/initialResume";

import PersonalInfoForm from "./components/PersonalInfoForm";
import EducationForm from "./components/EducationForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import ResumePreview from "./components/ResumePreview";

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
