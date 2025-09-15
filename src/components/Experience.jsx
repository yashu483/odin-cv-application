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
  return (
    <>
      <form>
        <div>
          <div>
            <label htmlFor="companyName">Company</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="jobRole">Job Role</label>
            <input type="text" />
          </div>
        </div>
      </form>
    </>
  );
}

export default Experience;
