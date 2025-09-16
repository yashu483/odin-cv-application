function PersonalInfo({ personalData, setPersonalData }) {
  function handleInput(e) {
    const { name, value } = e.target;
    setPersonalData({
      ...personalData,
      [name]: value,
    });
  }
  return (
    <div>
      <h2>Personal Information</h2>
      <form>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={handleInput}
            value={personalData.fullName}
          />
        </div>

        <div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInput}
              value={personalData.email}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              onChange={handleInput}
              name="phone"
              value={personalData.phone}
            />
          </div>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={handleInput}
            value={personalData.address}
          />
        </div>
        <div>
          <div>
            <label htmlFor="github">GitHub Link</label>
            <input
              type="url"
              id="github"
              name="github"
              onChange={handleInput}
              value={personalData.github}
            />
          </div>
          <div>
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
        <div>
          <label htmlFor="personalSite">Personal Site Link (Optional)</label>
          <input
            type="url"
            name="personalSite"
            id="personalSite"
            onChange={handleInput}
            value={personalData.personalSite}
          />
        </div>
        <div>
          <label htmlFor="summary">Summary</label>
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
