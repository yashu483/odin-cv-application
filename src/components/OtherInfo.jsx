function OtherInfo({ otherInfo, setOtherInfo }) {
  return (
    <>
      <div className="main-section-component">
        <h2 className="section-headings">Other Information</h2>
        <form className="section-form">
          <div className="other-info-container">
            <div>
              <label htmlFor="skills">Skills</label>
              <input type="text" name="skills" id="skills" />
            </div>
            <button type="button">Add</button>
          </div>
          <div className="other-info-container">
            <div>
              <label htmlFor="languages">Languages</label>
              <input type="text" name="languages" id="languages" />
            </div>
            <button type="button">Add</button>
          </div>
          <div className="other-info-container">
            <div>
              <label htmlFor="hobbies">Hobbies</label>
              <input type="text" name="hobbies" id="hobbies" />
            </div>
            <button type="button">ADD</button>
          </div>
        </form>
      </div>
      <div className="main-section-component"></div>
    </>
  );
}

export default OtherInfo;
