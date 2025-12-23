import React, { useState } from "react";

function EducationForm({ education, setResumeData }) {
  const [edu, setEdu] = useState({
    degree: "",
    institution: "",
    year: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdu({ ...edu, [name]: value });
  };

  const addEducation = () => {
    if (!edu.degree || !edu.institution) return;

    setResumeData((prevData) => ({
      ...prevData,
      education: [...prevData.education, edu]
    }));

    setEdu({
      degree: "",
      institution: "",
      year: "",
      description: ""
    });
  };

  return (
    <div>
      <h2>Education</h2>

      <input
        name="degree"
        placeholder="Degree"
        value={edu.degree}
        onChange={handleChange}
      />

      <input
        name="institution"
        placeholder="Institution"
        value={edu.institution}
        onChange={handleChange}
      />

      <input
        name="year"
        placeholder="Year"
        value={edu.year}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Achievements / Notes"
        value={edu.description}
        onChange={handleChange}
      />

      <button onClick={addEducation}>Add Education</button>
    </div>
  );
}

export default EducationForm;