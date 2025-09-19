import { useState } from "react";

// import from component files
import PersonalInfo from "./PersonalInfo";
import { Education, AddEducation } from "./Education";

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
  { name: "Experiences", key: "experiences" },
  { name: "Projects", key: "projects" },
  { name: "Other Information", key: "otherInfo" },
  { name: "Preview", key: "preview" },
];

const SectionComponents = {
  personalInfo: <PersonalInfo personalInfo={personalInfo} />,
  education: <Education />,
};

const educationalInfo = [];
educationalInfo.push(new AddEducation());

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
      />
      <Footer />
    </>
  );
}

export default Body;
