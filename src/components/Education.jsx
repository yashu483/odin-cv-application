import { v4 as uuidv4 } from "uuid";

import editIcon from "./../assets/icons/pencil.png";
import deleteIcon from "./../assets/icons/bin.png";
class AddEducation {
  constructor(
    key,
    collegeName = "",
    degree = "",
    startYear = "",
    graduatingYear = "",
    location = "",
    achievements = ""
  ) {
    this.key = key;
    this.collegeName = collegeName;
    this.degree = degree;
    this.startYear = startYear;
    this.graduatingYear = graduatingYear;
    this.location = location;
    this.achievements = achievements;
    this.isSelected = true;
    this.isAdded = false;
    this.id = uuidv4();
  }
}

// EducationCard() is used to show a single college information
function EducationCard({
  educationalData,
  educationalArray,
  setEducationalData,
}) {
  const editButtonHandler = function editButtonHandler(e) {
    console.log(e.target);
    const cardId = e.target.id;
    const newEducationArray = educationalArray.map((obj) => {
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

    const removeNullFromArray = newEducationArray.filter(
      (item) => item !== null
    );
    setEducationalData(removeNullFromArray);
  };

  const deleteButtonHandler = function deleteButtonHandler(e) {
    const newEducationArray = educationalArray
      .filter((obj) => obj.id !== e.target.id)
      .map((obj) => ({ ...obj }));

    setEducationalData(newEducationArray);
  };
  return (
    <div className="educational-card" key={educationalData.id}>
      <div className="educational-detail">
        <h3 className="card-headings">{`${educationalData.degree} - ${educationalData.collegeName}`}</h3>
        <p>{`${educationalData.startYear} to ${educationalData.graduatingYear}  at  ${educationalData.location}`}</p>
      </div>
      <div className="education-button-container">
        <button
          id={educationalData.id}
          onClick={editButtonHandler}
          style={{ backgroundImage: `url(${editIcon})` }}
        >
          Edit
        </button>
        <button
          id={educationalData.id}
          onClick={deleteButtonHandler}
          style={{ backgroundImage: `url(${deleteIcon})` }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

// ShowEducation will  renders each college and education
const ShowEducation = function ShowEducation({
  educationalArray,
  setEducationalData,
}) {
  return (
    <>
      {educationalArray.map((obj) => {
        if (obj.isAdded) {
          return (
            <EducationCard
              educationalData={obj}
              educationalArray={educationalArray}
              setEducationalData={setEducationalData}
              key={obj.id}
            />
          );
        } else {
          return null;
        }
      })}
    </>
  );
};
function Education({ educationalData, setEducationalData }) {
  let currentlyEditingEducationIndex;
  const currentlyEditingEducationObj = educationalData.filter((item, index) => {
    if (item.isSelected) {
      currentlyEditingEducationIndex = index;
    }
    return item.isSelected === true;
  })[0];

  const currentlyEditingEducation = { ...currentlyEditingEducationObj };

  const handleInput = function handleInput(e) {
    const { name, value } = e.target;

    const educationWithNewValue = {
      ...currentlyEditingEducation,
      [name]: value,
    };
    const newEducationArray = educationalData.map((obj) => ({ ...obj }));
    newEducationArray[currentlyEditingEducationIndex] = educationWithNewValue;

    setEducationalData(newEducationArray);
  };

  const addButtonHandler = function addButtonHandler() {
    currentlyEditingEducation.isSelected = false;
    currentlyEditingEducation.isAdded = true;
    const newEducationArray = educationalData.map((obj, index) => {
      return index === currentlyEditingEducationIndex
        ? currentlyEditingEducation
        : { ...obj };
    });
    newEducationArray.push(new AddEducation());
    setEducationalData(newEducationArray);
  };

  function renderTotalAddedEducation() {
    const totalAddedEducation = educationalData.filter(
      (item) => item.isAdded
    ).length;

    return totalAddedEducation === 0 ? (
      <>
        <h2 className="section-headings">Your Education</h2>
        <p className="section-headings">No Education Added</p>
      </>
    ) : (
      <>
        <h2 className="section-headings">Your Education</h2>
        <ShowEducation
          educationalArray={educationalData}
          setEducationalData={setEducationalData}
        />
      </>
    );
  }
  return (
    <>
      <div className="main-section-component">
        <h2 className="section-headings">Education</h2>
        <form id="educational-form" className="section-form">
          <div className="double-input-row">
            <div className="input-in-double-input-row">
              <label htmlFor="collegeName">
                University / Institution / College
                <span className="aria-label" aria-label="required">
                  *
                </span>
              </label>
              <input
                type="text"
                id="collegeName"
                name="collegeName"
                value={currentlyEditingEducation.collegeName}
                onChange={handleInput}
                required
              />
            </div>
            <div className="input-in-double-input-row">
              <label htmlFor="degree">
                Degree / Program / Course
                <span className="aria-label" aria-label="required">
                  *
                </span>
              </label>
              <input
                type="text"
                id="degree"
                name="degree"
                value={currentlyEditingEducation.degree}
                onChange={handleInput}
                required
              />
            </div>
          </div>
          <div className="double-input-row">
            <div className="input-in-double-input-row">
              <label htmlFor="startYear">
                Starting Year
                <span className="aria-label" aria-label="required">
                  *
                </span>
              </label>
              <input
                type="month"
                id="startYear"
                name="startYear"
                value={currentlyEditingEducation.startYear}
                onChange={handleInput}
                required
              />
            </div>
            <div className="input-in-double-input-row">
              <label htmlFor="graduatingYear">
                Graduating Year
                <span className="aria-label" aria-label="required">
                  *
                </span>
              </label>
              <input
                type="month"
                id="graduatingYear"
                name="graduatingYear"
                value={currentlyEditingEducation.graduatingYear}
                onChange={handleInput}
                required
              />
            </div>
          </div>
          <div className="single-input-row">
            <label htmlFor="field">
              Location
              <span className="aria-label" aria-label="required">
                *
              </span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={currentlyEditingEducation.location}
              onChange={handleInput}
              required
            />
          </div>
          <div className="single-input-row">
            <label htmlFor="achievements">Achievements (Optional)</label>
            <input
              type="text"
              id="achievements"
              value={currentlyEditingEducation.achievements}
              name="achievements"
              onChange={handleInput}
            />
          </div>
          <button
            type="submit"
            key={"educationSubmit"}
            onClick={(e) => {
              e.preventDefault();
              const educationalForm =
                document.querySelector("#educational-form");
              educationalForm.reportValidity();
              if (educationalForm.checkValidity()) {
                addButtonHandler();
              }
            }}
            className="education-add-button"
          >
            ADD
          </button>
        </form>
      </div>
      <div className="main-section-component card-container">
        {renderTotalAddedEducation()}
      </div>
    </>
  );
}

export { Education, AddEducation };
