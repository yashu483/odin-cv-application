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
  experienceArray,
  setExperienceData,
}) {
  const editButtonHandler = function editButtonHandler(e) {
    const cardId = e.target.id;
    const newExperienceArray = experienceArray.map((obj) => {
      const newObj = { ...obj };
      if (cardId === obj.id) {
        newObj.isSelected = true;
        return { ...newObj };
      } else {
        if (!obj.isAdded) {
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
    const newExperienceArray = experienceArray
      .filter((obj) => obj.id !== e.target.id)
      .map((obj) => ({ ...obj }));
    setExperienceData(newExperienceArray);
  };
  return (
    <div key={experience.id} className="educational-card">
      <div className="educational-detail">
        <h3 className="card-headings">{`${experience.jobRole} - ${experience.companyName}`}</h3>
        <p>{`${experience.startDate} to ${experience.endDate} - ${experience.location}`}</p>
      </div>

      {/* using education-button-container class for below div to apply same styles */}
      <div className="education-button-container">
        <button
          type="button"
          id={experience.id}
          onClick={editButtonHandler}
          className="card-edit-button"
        >
          Edit
        </button>
        <button
          type="button"
          id={experience.id}
          onClick={deleteButtonHandler}
          className="card-delete-button"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
const ShowExperience = function ShowExperience({
  experienceArray,
  setExperienceData,
}) {
  return (
    <>
      {experienceArray.map((obj) => {
        if (obj.isAdded) {
          return (
            <JobCard
              key={obj.id}
              experience={obj}
              experienceArray={experienceArray}
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
  const currentlyEditingExperienceObj = experienceData.filter((obj, index) => {
    if (obj.isSelected) {
      currentlyEditingExperienceIndex = index;
    }
    return obj.isSelected === true;
  })[0];

  const currentlyEditingExperience = {
    ...currentlyEditingExperienceObj,
  };

  function handleInput(e) {
    const { name, value } = e.target;

    const experienceWithNewValue = {
      ...currentlyEditingExperience,
      [name]: value,
    };

    const newExperienceArray = experienceData.map((obj) => ({ ...obj }));
    newExperienceArray[currentlyEditingExperienceIndex] =
      experienceWithNewValue;
    setExperienceData(newExperienceArray);
  }

  function renderExperiences() {
    const totalAddedExperience = experienceData.filter(
      (obj) => obj.isAdded
    ).length;
    return totalAddedExperience === 0 ? (
      <>
        <h2 className="section-headings">Your Career</h2>
        <p className="section-headings">No previous experience added.</p>
      </>
    ) : (
      <>
        <h2 className="section-headings">Your Career</h2>
        <ShowExperience
          experienceArray={experienceData}
          setExperienceData={setExperienceData}
        />
      </>
    );
  }

  const addButtonHandler = function addButtonHandler() {
    currentlyEditingExperience.isSelected = false;
    currentlyEditingExperience.isAdded = true;
    const newExperienceArray = experienceData.map((obj, index) => {
      return index === currentlyEditingExperienceIndex
        ? currentlyEditingExperience
        : { ...obj };
    });
    newExperienceArray.push(new NewExperience());
    setExperienceData(newExperienceArray);
  };
  return (
    <>
      <div className="main-section-component">
        <h2 className="section-headings">Experience</h2>
        <form className="section-form" id="experience-form">
          <div className="double-input-row">
            <div className="input-in-double-input-row">
              <label htmlFor="companyName">
                Company
                <span className="aria-label" aria-label="required">
                  *
                </span>
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                onChange={handleInput}
                required
                value={currentlyEditingExperience.companyName}
              />
            </div>
            <div className="input-in-double-input-row">
              <label htmlFor="jobRole">
                Job Role
                <span className="aria-label" aria-label="required">
                  *
                </span>
              </label>
              <input
                type="text"
                id="jobRole"
                name="jobRole"
                onChange={handleInput}
                value={currentlyEditingExperience.jobRole}
                required
              />
            </div>
          </div>
          <div className="single-input-row">
            <label htmlFor="location">
              Location
              <span className="aria-label" aria-label="required">
                *
              </span>
            </label>
            <input
              type="text"
              name="location"
              id="location"
              onChange={handleInput}
              required
              value={currentlyEditingExperience.location}
            />
          </div>
          <div className="double-input-row">
            <div className="input-in-double-input-row">
              <label htmlFor="startDate">
                Start Date
                <span className="aria-label" aria-label="required">
                  *
                </span>
              </label>
              <input
                type="month"
                name="startDate"
                id="startDate"
                onChange={handleInput}
                required
                value={currentlyEditingExperience.startDate}
              />
            </div>
            <div className="input-in-double-input-row">
              <label htmlFor="endDate">
                End Date
                <span className="aria-label" aria-label="required">
                  *
                </span>
              </label>
              <input
                type="month"
                name="endDate"
                id="endDate"
                onChange={handleInput}
                value={currentlyEditingExperience.endDate}
                required
              />
            </div>
          </div>
          <div className="single-input-row">
            <label htmlFor="jobDescription">Description</label>
            <textarea
              name="jobDescription"
              id="jobDescription"
              onChange={handleInput}
              value={currentlyEditingExperience.jobDescription}
            ></textarea>
          </div>
          <button
            type="submit"
            className="education-add-button"
            onClick={(e) => {
              e.preventDefault();
              const experienceForm = document.querySelector("#experience-form");
              experienceForm.reportValidity();

              if (experienceForm.checkValidity()) {
                addButtonHandler();
              }
            }}
          >
            Add
          </button>
        </form>
      </div>
      <div className="main-section-component card-container">
        {renderExperiences()}
      </div>
    </>
  );
}

export { Experience, NewExperience };
