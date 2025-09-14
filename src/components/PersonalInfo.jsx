import { useState } from "react";

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

function PersonalInfo({ changeToNextSection }) {
  const [personalData, setPersonalData] = useState(personalInfo);

  function handleInput(e) {
    const { name, value } = e.target;
    setPersonalData({
      ...personalData,
      [name]: value,
    });
  }
  return (
    <form>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          onChange={handleInput}
        />
      </div>

      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={handleInput} />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" onChange={handleInput} name="phone" />
        </div>
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" onChange={handleInput} />
      </div>
      <div>
        <div>
          <label htmlFor="github">GitHub Link</label>
          <input type="url" id="github" name="github" onChange={handleInput} />
        </div>
        <div>
          <label htmlFor="linkedIn">LinkedIn Profile Link</label>
          <input
            type="url"
            id="linkedIn"
            name="linkedIn"
            onChange={handleInput}
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
        />
      </div>
      <div>
        <label htmlFor="summary">Summary</label>
        <textarea name="summary" id="summary" onChange={handleInput}></textarea>
      </div>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          changeToNextSection();
        }}
      >
        Submit and Next
      </button>
    </form>
  );
}

export default PersonalInfo;
