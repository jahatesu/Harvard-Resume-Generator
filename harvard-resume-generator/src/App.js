import React, { useState } from "react";
import initialResume from "./data/initialResume";
import PersonalInfoForm from "./components/PersonalInfoForm";

function App() {
  const [resumeData, setResumeData] = useState(initialResume);

  return (
    <div>
      <h1>Harvard Resume Generator</h1>

      <PersonalInfoForm
        personalInfo={resumeData.personalInfo}
        setResumeData={setResumeData}
      />

      <pre>{JSON.stringify(resumeData, null, 2)}</pre>
    </div>
  );
}

export default App;
