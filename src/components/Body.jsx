import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";

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

function Header({ selectedSection, changeSection }) {
  return (
    <header>
      <h1>CV / Resume Builder</h1>
      <nav>
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
      <nav>
        <button type="button">Previous</button>
        <button type="button">Next</button>
      </nav>
      <h3 className="footer-link">
        <a href="#">Created By Yashu</a>
      </h3>
    </footer>
  );
}

function Main({ selectedSectionObj, personalData, setPersonalData }) {
  return (
    <main>
      {selectedSectionObj.key === "personalInfo" ? (
        <PersonalInfo
          personalData={personalData}
          setPersonalData={setPersonalData}
        />
      ) : null}
    </main>
  );
}

function Body() {
  const [selectedSection, setSelectedSection] = useState(SECTIONS[0].key);
  const [personalData, setPersonalData] = useState(personalInfo);

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
      />
      <Footer />
    </>
  );
}

export default Body;
