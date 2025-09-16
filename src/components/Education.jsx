import { useState } from "react";

class AddEducation {
  constructor(
    key,
    collegeName = "",
    degree = "",
    startYear = "",
    graduatingYear = "",
    field = "",
    achievements = ""
  ) {
    this.key = key;
    this.collegeName = collegeName;
    this.degree = degree;
    this.startYear = startYear;
    this.graduatingYear = graduatingYear;
    this.field = field;
    this.achievements = achievements;
  }
}

const educationalInfo = [];

function Education() {
  const [educationalData, setEducationalData] = useState(
    new AddEducation(educationalInfo.length - 1)
  );

  const handleInput = function handleInput(e) {
    const { name, value } = e.target;
    setEducationalData({
      ...educationalData,
      [name]: value,
    });
  };
  return (
    <>
      <form>
        <div>
          <div>
            <label htmlFor="collegeName">
              University / Institution / College
            </label>
            <input
              type="text"
              id="collegeName"
              name="collegeName"
              value={educationalData.collegeName}
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="degree">Degree / Program / Course</label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={educationalData.degree}
              onChange={handleInput}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="startYear">Starting Year</label>
            <input
              type="month"
              id="startYear"
              name="startYear"
              value={educationalData.startYear}
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="graduatingYear">Graduating Year</label>
            <input
              type="month"
              id="graduatingYear"
              name="graduatingYear"
              value={educationalData.graduatingYear}
              onChange={handleInput}
            />
          </div>
        </div>
        <div>
          <label htmlFor="field">Field of Study</label>
          <input
            type="text"
            id="field"
            name="field"
            value={educationalData.field}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="achievements">Achievements</label>
          <input
            type="text"
            id="achievements"
            value={educationalData.achievements}
            name="achievements"
            onChange={handleInput}
          />
        </div>
        <button
          type="submit"
          key={"educationSubmit"}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Add Education
        </button>
      </form>
      {educationalInfo.length > 1}
      <button type="button">Next</button>
    </>
  );
}

export default Education;
