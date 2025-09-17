function PersonalInfo({ personalData, setPersonalData }) {
  function handleInput(e) {
    const { name, value } = e.target;
    setPersonalData({
      ...personalData,
      [name]: value,
    });
  }
  return (
    <div className="personal-info">
      <h2 className="section-headings">Personal Information</h2>
      <form className="section-form">
        <div className="single-input-row">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={handleInput}
            value={personalData.fullName}
            placeholder="Crazy Developer"
          />
        </div>

        <div className="double-input-row">
          <div className="input-in-double-input-row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInput}
              value={personalData.email}
              placeholder="e.g., yourmail@gmail.com"
            />
          </div>
          <div className="input-in-double-input-row">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              onChange={handleInput}
              name="phone"
              value={personalData.phone}
              placeholder="e.g., 123-456-7890"
            />
          </div>
        </div>
        <div className="single-input-row">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={handleInput}
            value={personalData.address}
          />
        </div>
        <div className="double-input-row">
          <div className="input-in-double-input-row">
            <label htmlFor="github">GitHub Link</label>
            <input
              type="url"
              id="github"
              name="github"
              onChange={handleInput}
              value={personalData.github}
            />
          </div>
          <div className="input-in-double-input-row">
            <label htmlFor="linkedIn">LinkedIn Profile Link</label>
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
