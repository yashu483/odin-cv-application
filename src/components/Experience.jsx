import { useState } from "react";

class NewExperience {
  constructor(
    company = "",
    jobRole = "",
    location = "",
    startDate = "",
    endDate = "",
    jobDescription = ""
  ) {
    this.companyName = company;
    this.jobRole = jobRole;
    this.location = location;
    this.startDate = startDate;
    this.endDate = endDate;
    this.jobDescription = jobDescription;
  }
}
const experiences = [];

function Experience() {
  const [experience, setExperience] = useState(new NewExperience());

  function handleInput(e) {
    const { name, value } = e.target;

    setExperience({
      ...experience,
      [name]: value,
    });
  }
  return (
    <>
      <form>
        <div>
          <div>
            <label htmlFor="companyName">Company</label>
            <input type="text" name="companyName" id="companyName" />
          </div>
          <div>
            <label htmlFor="jobRole">Job Role</label>
            <input type="text" id="jobRole" name="jobRole" />
          </div>
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            onChange={handleInput}
          />
        </div>
        <div>
          <div>
            <label htmlFor="startDate">Start Date</label>
            <input
              type="text"
              name="startDate"
              id="startDate"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="endDate">End Date</label>
            <input
              type="text"
              name="endDate"
              id="endDate"
              onChange={handleInput}
            />
          </div>
        </div>
        <label htmlFor="jobDescription"></label>
        <div>
          <textarea
            name="jobDescription"
            id="jobDescription"
            onChange={handleInput}
          ></textarea>
        </div>
        <button type="button">Add</button>
      </form>
    </>
  );
}

export default Experience;
