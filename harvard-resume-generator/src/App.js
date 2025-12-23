import React, { useState } from "react";
import initialResume from "./data/initialResume";

function App() {
  const [resumeData, setResumeData] = useState(initialResume);

  return (
    <div>
      <h1>Harvard Resume Generator</h1>
      <pre>{JSON.stringify(resumeData, null, 2)}</pre>
    </div>
  );
}

export default App;
