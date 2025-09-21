function Preview({
  personalData,
  educationalData,
  experienceData,
  projectData,
  otherInfo,
}) {
  return (
    <>
      <div className="main-section-component">
        <h2 className="section-headings">Preview</h2>
        <div className="preview">
          <div className="resume-left-section"></div>
          <div className="resume-right-section">
            <div className="resume-header">
              <h1>{personalData.fullName}</h1>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="download-button">
        DOWNLOAD
      </button>
    </>
  );
}

export default Preview;
