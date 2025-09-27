import { useState } from "react";

// import from component files
import PersonalInfo from "./PersonalInfo";
import { Education, AddEducation } from "./Education";
import { Experience, NewExperience } from "./Experience";
import { Project, NewProject } from "./Projects";
import { OtherInfo } from "./OtherInfo";
import Preview from "./Preview";

const personalInfo = {
  fullName: "",
  profilePic: "",
  profilePicUrl: null,
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
    name: "Personal Info",
    key: "personalInfo",
  },
  { name: "Education", key: "education" },
  { name: "Experiences", key: "experience" },
  { name: "Projects", key: "projects" },
  { name: "Other Info", key: "otherInfo" },
  { name: "Preview", key: "preview" },
];

const educationalInfo = [];
educationalInfo.push(new AddEducation());

const jobInfo = [];
jobInfo.push(new NewExperience());

const projectInfo = [];
projectInfo.push(new NewProject());
const otherInfoObj = {
  technicalSkills: [""],
  skills: [""],
  languages: [""],
  hobbies: [""],
};

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
            className={`button-29 ${
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
function Footer({ selectedSection, changeSection }) {
  const navigateButtonHandler = function navigateButtonHandler(e) {
    let selectedSectionIndex;
    let indexToSelect;
    SECTIONS.forEach((item, index) => {
      if (item.key === selectedSection) {
        selectedSectionIndex = index;
      }
    });
    if (
      (selectedSectionIndex === 0 && e.target.id === "previous") ||
      (selectedSectionIndex === SECTIONS.length - 1 && e.target.id === "next")
    )
      return;
    else {
      if (e.target.id === "previous") indexToSelect = selectedSectionIndex - 1;
      else indexToSelect = selectedSectionIndex + 1;
    }
    changeSection(SECTIONS[indexToSelect].key);
  };
  return (
    <footer>
      <nav className="elevated">
        <button
          type="button"
          id="previous"
          className="button-29"
          onClick={navigateButtonHandler}
        >
          Previous
        </button>
        <button
          type="button"
          id="next"
          className="button-29"
          onClick={navigateButtonHandler}
        >
          Next
        </button>
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
  otherInfo,
  setOtherInfo,
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
      case "otherInfo": {
        return <OtherInfo otherInfo={otherInfo} setOtherInfo={setOtherInfo} />;
      }
      case "preview": {
        return (
          <Preview
            personalData={personalData}
            educationalData={educationalData}
            experienceData={experienceData}
            projectData={projectData}
            otherInfo={otherInfo}
          />
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
  const [otherInfo, setOtherInfo] = useState(otherInfoObj);

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
        otherInfo={otherInfo}
        setOtherInfo={setOtherInfo}
      />
      <Footer selectedSection={selectedSection} changeSection={changeSection} />
    </>
  );
}

export default Body;
