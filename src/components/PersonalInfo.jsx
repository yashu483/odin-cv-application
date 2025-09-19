function PersonalInfo({ personalData, setPersonalData }) {
  function handleInput(e) {
    const { name, value } = e.target;
    setPersonalData({
      ...personalData,
      [name]: value,
    });
  }
  return (
    <div className="main-section-component elevated">
      <h2 className="section-headings">Personal Information</h2>
      <form className="section-form">
        <div className="single-input-row">
          <label htmlFor="fullName">
            Full Name
            <span className="aria-label" aria-label="required">
              *
            </span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={handleInput}
            value={personalData.fullName}
            placeholder="Crazy Developer"
            required
          />
        </div>

        <div className="double-input-row">
          <div className="input-in-double-input-row">
            <label htmlFor="email">
              Email
              <span className="aria-label" aria-label="required">
                *
              </span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInput}
              value={personalData.email}
              placeholder="e.g., yourmail@gmail.com"
              required
            />
          </div>
          <div className="input-in-double-input-row">
            <label htmlFor="phone">
              Phone
              <span className="aria-label" aria-label="required">
                *
              </span>
            </label>
            <input
              type="tel"
              id="phone"
              onChange={handleInput}
              name="phone"
              value={personalData.phone}
              placeholder="e.g., 123-456-7890"
              required
            />
          </div>
        </div>
        <div className="single-input-row">
          <label htmlFor="address">
            Address
            <span className="aria-label" aria-label="required">
              *
            </span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={handleInput}
            value={personalData.address}
            placeholder="e.g., At. Somewhere, Earth"
            required
          />
        </div>
        <div className="double-input-row">
          <div className="input-in-double-input-row">
            <label htmlFor="github">GitHub Link (Optional)</label>
            <input
              type="url"
              id="github"
              name="github"
              onChange={handleInput}
              value={personalData.github}
            />
          </div>
          <div className="input-in-double-input-row">
            <label htmlFor="linkedIn">LinkedIn Profile Link (Optional)</label>
            <input
              type="url"
              id="linkedIn"
              name="linkedIn"
              onChange={handleInput}
              value={personalData.linkedIn}
            />
          </div>
        </div>
        <div className="single-input-row">
          <label htmlFor="personalSite">Personal Site Link (Optional)</label>
          <input
            type="url"
            name="personalSite"
            id="personalSite"
            onChange={handleInput}
            value={personalData.personalSite}
          />
        </div>
        <div className="textarea-box">
          <label htmlFor="summary">More About Yourself</label>
          <textarea
            name="summary"
            id="summary"
            onChange={handleInput}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
