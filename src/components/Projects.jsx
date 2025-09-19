class NewProject {
  constructor() {
    this.projectName = "";
    this.skillStack = "";
    this.githubLink = "";
    this.liveSiteLink = "";
    this.projectSummary = "";
    this.isSelected = true;
    this.added = false;
  }
}
function Project() {
  return (
    <>
      <div className="main-section-component">
        <h2 className="section-headings">Projects</h2>
        <form className="section-form">
          <div className="single-input-row">
            <label htmlFor="projectName">Project Name</label>
            <input type="text" name="projectName" id="projectName" />
          </div>
          <div className="single-input-row">
            <label htmlFor="skillStack">Skill Stack</label>
            <input type="text" id="skillStack" name="skillStack" />
            <p>Use comma separated value for multiple skill.</p>
          </div>
          <div className="double-input-row">
            <div className="input-in-double-input-row">
              <label htmlFor="githubLink">Github Repo Link</label>
              <input type="url" id="githubLink" name="githubLink" />
            </div>
            <div className="input-in-double-input-row">
              <label htmlFor="liveSiteLink">Live Demo Link</label>
              <input type="url" id="liveSiteLink" name="liveSiteLink" />
            </div>
          </div>
          <div className="single-input-row">
            <label htmlFor="projectSummary">Project Summary</label>
            <textarea name="projectSummary" id="projectSummary"></textarea>
          </div>
          <button type="submit" className="education-add-button">
            Add
          </button>
        </form>
      </div>
      <div></div>
    </>
  );
}

export { Project, NewProject };
