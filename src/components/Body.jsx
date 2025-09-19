import { useState } from "react";

// import from component files
import PersonalInfo from "./PersonalInfo";
import { Education, AddEducation } from "./Education";
import { Experience, NewExperience } from "./Experience";
import { Project, NewProject } from "./Projects";

const personalInfo = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  github: "",
  linkedIn: "",
  personalSite: "",
  summary: "",
};
const SECTIONS = [
  {
    name: "Personal Information",
    key: "personalInfo",
  },
  { name: "Education", key: "education" },
  { name: "Experiences", key: "experience" },
  { name: "Projects", key: "projects" },
  { name: "Other Information", key: "otherInfo" },
  { name: "Preview", key: "preview" },
];

const educationalInfo = [];
educationalInfo.push(new AddEducation());

const jobInfo = [];
jobInfo.push(new NewExperience());

const projectInfo = [];
projectInfo.push(new NewProject());

function Header({ selectedSection, changeSection }) {
  return (
    <header>
      <h1 className="elevated">CV / Resume Builder</h1>
      <nav className="elevated">
        {SECTIONS.map((section) => (
          <button
            key={section.key}
            type="button"
            onClick={() => changeSection(section.key)}
            className={`section-buttons ${
              selectedSection === section.key ? "selected-section-button" : ""
            }`}
          >
            {section.name}
          </button>
        ))}
      </nav>
    </header>
  );
}
function Footer() {
  return (
    <footer>
      <nav className="elevated">
        <button type="button">Previous</button>
        <button type="button">Next</button>
      </nav>
      <h3 className="footer-link">
        <a href="#">Created By Yashu</a>
      </h3>
    </footer>
  );
}

function Main({
  selectedSectionObj,
  personalData,
  setPersonalData,
  educationalData,
  setEducationalData,
  experienceData,
  setExperienceData,
  projectData,
  setProjectData,
}) {
  function renderSection() {
    switch (selectedSectionObj.key) {
      case "personalInfo":
        return (
          <PersonalInfo
            personalData={personalData}
            setPersonalData={setPersonalData}
          />
        );
      case "education": {
        return (
          <Education
            educationalData={educationalData}
            setEducationalData={setEducationalData}
          />
        );
      }
      case "experience": {
        return (
          <Experience
            experienceData={experienceData}
            setExperienceData={setExperienceData}
          />
        );
      }
      case "projects": {
        return (
          <Project projectData={projectData} setProjectData={setProjectData} />
        );
      }
      default:
        return null;
    }
  }
  return <main>{renderSection()}</main>;
}

function Body() {
  const [selectedSection, setSelectedSection] = useState(SECTIONS[0].key);
  const [personalData, setPersonalData] = useState(personalInfo);
  const [educationalData, setEducationalData] = useState(educationalInfo);
  const [experienceData, setExperienceData] = useState(jobInfo);
  const [projectData, setProjectData] = useState(projectInfo);

  function changeSection(sectionKey) {
    setSelectedSection(sectionKey);
  }
  return (
    <>
      <Header selectedSection={selectedSection} changeSection={changeSection} />
      <Main
        selectedSectionObj={
          SECTIONS.filter((section) => section.key === selectedSection)[0]
        }
        personalData={personalData}
        setPersonalData={setPersonalData}
        educationalData={educationalData}
        setEducationalData={setEducationalData}
        experienceData={experienceData}
        setExperienceData={setExperienceData}
        projectData={projectData}
        setProjectData={setProjectData}
      />
      <Footer />
    </>
  );
}

export default Body;
