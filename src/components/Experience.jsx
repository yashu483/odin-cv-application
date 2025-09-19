import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
    this.id = uuidv4();
    this.isSelected = true;
    this.isAdded = false;
  }
}

const JobCard = function JobCard({
  experience,
  experienceData,
  setExperienceData,
}) {
  const editButtonHandler = function editButtonHandler(e) {
    const cardId = e.target.id;
    const newExperienceArray = experienceData.map((obj) => {
      const newObj = { ...obj };
      if (cardId === newObj.id) {
        newObj.isSelected = true;
      } else {
        if (!newObj.isAdded) {
          return null;
        }

        newObj.isSelected = false;
        return { ...newObj };
      }
    });

    const removeNullFromArray = newExperienceArray.filter(
      (item) => item !== null
    );

    setExperienceData(removeNullFromArray);
  };

  const deleteButtonHandler = function deleteButtonHandler(e) {
    const newExperienceArray = experienceData
      .filter((obj) => obj.id !== e.target.id)
      .map((obj) => ({ ...obj }));
    setExperienceData(newExperienceArray);
  };
  return (
    <div key={experience.id}>
      <div>
        <h3 className="card-headings">{`${experience.jobRole} - ${experience.companyName}`}</h3>
        <p>{`${experience.startDate} to ${experience.endDate} - ${experience.location}`}</p>
      </div>

      {/* using education-button-container class for below div to apply same styles */}
      <div className="education-button-container">
        <button type="button" id={experience.id} onClick={editButtonHandler}>
          Edit
        </button>
        <button type="button" id={experience.id} onClick={deleteButtonHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};
const ShowExperience = function ShowExperience({
  experienceData,
  setExperienceData,
}) {
  return (
    <>
      {experienceData.map((obj) => {
        if (obj.isAdded) {
          return (
            <JobCard
              experience={obj}
              experienceData={experienceData}
              setExperienceData={setExperienceData}
            />
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

function Experience({ experienceData, setExperienceData }) {
  let currentlyEditingExperienceIndex;
  const currentlyEditingExperienceObj = experienceData.map((obj, index) => {
    currentlyEditingExperienceIndex = index;
    return obj.isSelected === true;
  })[0];

  const currentlyEditingExperience = {
    ...currentlyEditingExperienceObj,
  };

  function handleInput(e) {
    const { name, value } = e.target;

    const experienceWithNewValue = {
      currentlyEditingExperience,
      [name]: value,
    };

    const newExperienceArray = experienceData.map((obj) => ({ ...obj }));
    newExperienceArray[currentlyEditingExperienceIndex] =
      experienceWithNewValue;
    setExperienceData(newExperienceArray);
  }
  return (
    <>
      <div className="main-section-component">
        <h2 className="section-headings">Experience</h2>
        <form className="section-form" id="experience-form">
          <div className="double-input-row">
            <div className="input-in-double-input-row">
              <label htmlFor="companyName">Company</label>
              <input type="text" name="companyName" id="companyName" />
            </div>
            <div className="input-in-double-input-row">
              <label htmlFor="jobRole">Job Role</label>
              <input type="text" id="jobRole" name="jobRole" />
            </div>
          </div>
          <div className="single-input-row">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              onChange={handleInput}
            />
          </div>
          <div className="double-input-row">
            <div className="input-in-double-input-row">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="text"
                name="startDate"
                id="startDate"
                onChange={handleInput}
              />
            </div>
            <div className="input-in-double-input-row">
              <label htmlFor="endDate">End Date</label>
              <input
                type="text"
                name="endDate"
                id="endDate"
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="single-input-row">
            <label htmlFor="jobDescription">Description</label>
            <textarea
              name="jobDescription"
              id="jobDescription"
              onChange={handleInput}
            ></textarea>
          </div>
          <button type="button" className="education-add-button">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export { Experience, NewExperience };
