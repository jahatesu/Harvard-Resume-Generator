# Harvard Resume Generator
The Resume Generator is a web-based application that allows users to create professional resumes by filling out structured forms. The system automatically formats the input into a clean, readable Harvard-style resume and allows users to export it as a PDF.
For the initial version, the application focuses exclusively on the Harvard Resume format, as it is one of the most widely accepted and effective resume styles used by students, fresh graduates, and professionals. This scope allows the project to prioritize content structure, clarity, and consistency over multiple template variations.
This project is intended to demonstrate software engineering fundamentals such as planning, data modeling, UI design, and document generation, while delivering a practical and resume-ready tool.
Support for additional resume templates will be considered in future versions of the system.

# 🚀 Features
**MVP**
- Form-based resume input
- Live resume preview
- Harvard-style resume layout
- PDF export
- Clean and minimal UI
- No authentication (single-session use)

# Planned Enhancements
- Multiple resume templates
- Resume version saving
-User authentication
- Resume tailoring for specific job roles
- Improved styling and customization

#  🧠 Why Harvard Style?
The Harvard resume format is widely regarded as one of the strongest and most effective resume styles for:
- Students and fresh graduates
- Internship applications
- nATS-friendly submissions

For the initial version, the application supports only the Harvard-style resume to maintain focus, clarity, and a well-defined MVP.

# 🛠️ Tech Stack
**Frontend**
- React
- JavaScript
- HTML5
- CSS3
  
**Tooling**
- Git & GitHub
- GitHub Codespaces
- VS Code
- Vite (React setup)

**PDF Generation**
- Client-side PDF export
  
# 📂 Project Structure 
src/
 ├─ components/
 │   ├─ forms/
 │   │   ├─ PersonalInfoForm.jsx
 │   │   ├─ EducationForm.jsx
 │   │   ├─ ExperienceForm.jsx
 │   │   ├─ SkillsForm.jsx
 │   │   └─ ProjectsForm.jsx
 │   ├─ preview/
 │   │   └─ ResumePreview.jsx
 │   └─ common/
 ├─ data/
 │   └─ initialResume.js
 ├─ App.jsx
 └─ main.jsx

# 📄 Resume Sections Supported
- Personal Information
- Education
- Work Experience
- Skills
- Projects
Each section supports multiple entries where applicable.

# 🔁 User Flow
1. User opens the application
2. User fills out resume information via structured forms
3. Resume preview updates in real time
4. User exports the resume as a PDF

# 🎯 Project Goals
- Demonstrate software engineering best practices
- Apply proper project planning and MVP scoping
- Build a real-world, usable application
- Showcase frontend state management and UI design
- Produce a deployment-ready web application

# 📌 MVP Scope Decisions
- No user authentication
- No database persistence
- Single resume per session
- Focus on content structure and formatting

These decisions help ensure the project is complete, maintainable, and scalable for future iterations.

# 🧪 Definition of Done
- The project is considered complete when:
- Users can input resume information
- The resume follows Harvard formatting
- Live preview works correctly
- PDF export generates a clean output
- The application is deployed

# 🌐 Deployment
Deployment will be handled using:
- Vercel or Netlify
A live demo link will be added once deployment is complete.

# 📖 Future Improvements

- Resume templates beyond Harvard style
- User accounts and saved resumes
- Resume analytics and feedback
- Accessibility improvements
- Mobile responsiveness enhancements
