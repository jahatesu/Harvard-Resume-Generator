import React, { useState } from "react";
import initialResume from "./data/initialResume";
import PersonalInfoForm from "./components/PersonalInfoForm";
import ResumePreview from "./components/ResumePreview";

function App() {
  const [resumeData, setResumeData] = useState(initialResume);

  return (
    <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
      {/* Left: Form */}
      <div style={{ flex: 1 }}>
        <h1>Harvard Resume Generator</h1>
        <PersonalInfoForm
          personalInfo={resumeData.personalInfo}
          setResumeData={setResumeData}
        />
      </div>

      {/* Right: Preview */}
      <div style={{ flex: 1 }}>
        <h2>Resume Preview</h2>
        <ResumePreview resumeData={resumeData} />
      </div>
    </div>
  );
}

export default App;