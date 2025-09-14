import { useState } from "react";

const SECTIONS = [
  { name: "Personal Information", key: "personalInfo" },
  { name: "Education", key: "education" },
  { name: "Experiences", key: "experiences" },
  { name: "Skills", key: "skills" },
  { name: "Other Information", key: "otherInfo" },
  { name: "Preview", key: "preview" },
];

function Header({ selectedSection, changeSection }) {
  return (
    <>
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
    </>
  );
}
function Footer() {
  return (
    <footer>
      <h3 className="footer-link">
        <a href="#">Created By Yashu</a>
      </h3>
    </footer>
  );
}

function Main({ selectedSectionObj }) {
  return (
    <main>
      <h2>{selectedSectionObj.name}</h2>
    </main>
  );
}

function Body() {
  const [selectedSection, setSelectedSection] = useState(SECTIONS[0].key);

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
      />
      <Footer />
    </>
  );
}

export default Body;
