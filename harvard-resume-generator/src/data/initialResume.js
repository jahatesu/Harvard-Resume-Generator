const initialResume = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    location: "",      // e.g., "Cambridge, MA" or "123 Harvard Yard, Cambridge, MA"
    linkedin: "",     // Link to profile
    github: "",       // For technical candidates
    website: "",      // Portfolio, Blog, or Personal Site
    displayLinks: {   // Optional: how the link appears on the PDF
      linkedinLabel: "", 
      githubLabel: "",
      websiteLabel: ""
    }
  },

  education: [
  {
    school: "",
    location: "", 
    degree: "",
    major: "",
    graduation_date: "", // e.g., "May 2025" or "Expected May 2027"
    gpa: "",             // e.g., "3.9/4.0"
    honors_awards: "",   // e.g., "Dean's List, Cum Laude"
    relevant_coursework: "", // e.g., "Financial Accounting, Microeconomics"
    activities: "",      // e.g., "Varsity Athletics, Club President"
    description: ""      // For Thesis titles or extra context
  }
],
  workExperience: [
    {
      company: "",
      location: "",      // e.g., "New York, NY" (Crucial for Harvard layout)
      role: "",          // e.g., "Investment Banking Analyst"
      startDate: "",     // e.g., "June 2021"
      endDate: "",       // e.g., "Present" or "August 2023"
      bullets: [         // Array of strings for better formatting control
        "", 
        "", 
        ""
      ],
      technologies: []   // Optional: For CS-focused Harvard resumes
    }
  ],

// App.js or initialResume.js

  skills: [
    {
      category: "", 
      list: ""
    }
  ],
  interests: "" ,

  projects: [
    {
      name: "",        // e.g., "Real-time Stock Market Dashboard"
      role: "",        // For personal projects: "Independent Developer" or "Creator"
      date: "",        // e.g., "Winter 2024"
      link: "",        // URL to GitHub or Live Demo
      technologies: "", // e.g., "Next.js, Tailwind CSS, API integration"
      bullets: [       // These describe the "What" and the "Result"
        "", 
        "", 
        ""
      ]
    }
  ],
};

export default initialResume;
