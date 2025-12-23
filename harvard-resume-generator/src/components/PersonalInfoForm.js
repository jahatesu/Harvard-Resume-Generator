import React from "react";

function PersonalInfoForm({ personalInfo, setResumeData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setResumeData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [name]: value
      }
    }));
  };

  return (
    <div>
      <h2>Personal Information</h2>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={personalInfo.fullName}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={personalInfo.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={personalInfo.phone}
        onChange={handleChange}
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={personalInfo.location}
        onChange={handleChange}
      />

      <input
        type="text"
        name="linkedin"
        placeholder="LinkedIn URL"
        value={personalInfo.linkedin}
        onChange={handleChange}
      />

      <input
        type="text"
        name="github"
        placeholder="GitHub URL"
        value={personalInfo.github}
        onChange={handleChange}
      />
    </div>
  );
}

export default PersonalInfoForm;
