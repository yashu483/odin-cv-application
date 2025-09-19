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
      <div>
        <form className="section-form">
          <div className="single-input-row">
            <label htmlFor=""></label>
            <input type="text" />
          </div>
          <div className="single-input-row">
            <label htmlFor=""></label>
            <input type="text" />
          </div>
          <div className="double-input-row">
            <div className="input-in-double-input-row"></div>
            <div className="input-in-double-input-row"></div>
          </div>
          <div className="single-input-row">
            <label htmlFor=""></label>
            <input type="text" />
          </div>
          <div className="single-input-row">
            <label htmlFor=""></label>
            <textarea name="" id=""></textarea>
          </div>
        </form>
      </div>
      <div></div>
    </>
  );
}

export default Project;
