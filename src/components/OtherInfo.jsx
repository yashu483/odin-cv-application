import { v4 as uuidv4 } from "uuid";

const OtherInfoCard = function OtherInfoCard({
  currentInfoName,
  currentInfoValue,
  otherInfo,
  setOtherInfo,
}) {
  const uuid = currentInfoValue.slice(-36);

  const deleteButtonHandler = function deleteButtonHandler() {
    const removedDeletedItemArray = otherInfo[currentInfoName].filter((str) => {
      const strUUID = str.slice(-36);
      return strUUID !== uuid;
    });
    const newObj = {};

    Object.keys(otherInfo).forEach((key) => {
      if (key === currentInfoName) {
        newObj[currentInfoName] = removedDeletedItemArray;
      } else {
        const tempArray = otherInfo[key];
        newObj[key] = [...tempArray];
      }
    });
    setOtherInfo(newObj);
    // you have to copy otherInfo object, but also its elements should be copied , not mutated
  };
  const removeUUID = currentInfoValue.slice(0, -36);
  return (
    <div className="info-card" key={uuid}>
      <p>{removeUUID}</p>
      <button
        type="button"
        className="otherinfo-card-delete-button"
        onClick={deleteButtonHandler}
      >
        Delete
      </button>
    </div>
  );
};
const OtherInfoCategory = function OtherInfoCategory({
  otherInfoCategoryName,
  otherInfoCategoryArray,
  otherInfo,
  setOtherInfo,
}) {
  const lastArrayIndex = otherInfoCategoryArray.length - 1;
  const capitalizeCategoryName = function capitalizeCategoryName(name) {
    switch (name) {
      case "skills":
        return "Skills";
      case "languages":
        return "Languages";
      case "hobbies":
        return "Hobbies";
    }
  };
  return (
    <div className="other-info-category-component" key={otherInfoCategoryName}>
      <h3 className="info-card-h3">
        {capitalizeCategoryName(otherInfoCategoryName)}
      </h3>
      <div className="card-contains-other-info">
        {otherInfoCategoryArray.length === 1 ? (
          <p>{`No ${otherInfoCategoryName} added.`}</p>
        ) : (
          otherInfoCategoryArray.map((item, index) => {
            if (lastArrayIndex === index) {
              return null;
            } else {
              return (
                <OtherInfoCard
                  currentInfoName={otherInfoCategoryName}
                  currentInfoValue={item}
                  otherInfo={otherInfo}
                  setOtherInfo={setOtherInfo}
                  key={item}
                />
              );
            }
          })
        )}
      </div>
    </div>
  );
};
const ShowOtherInfo = function ShowOtherInfo({ otherInfo, setOtherInfo }) {
  return (
    <>
      <h2 className="section-headings">More About Yourself</h2>
      <div className="other-info-category">
        {Object.keys(otherInfo).map((key) => {
          return (
            <OtherInfoCategory
              otherInfoCategoryName={key}
              otherInfoCategoryArray={otherInfo[key]}
              otherInfo={otherInfo}
              setOtherInfo={setOtherInfo}
            />
          );
        })}
      </div>
    </>
  );
};
function OtherInfo({ otherInfo, setOtherInfo }) {
  const getOtherInfoCopy = function getOtherInfoCopy(obj) {
    // its always going to be use to copy otherInfo

    const newObj = {};
    Object.keys(obj).forEach((key) => {
      const keyArray = obj[key];
      const copyArray = [...keyArray];
      newObj[key] = copyArray;
    });
    return newObj;
  };

  const handleInput = function handleInput(e) {
    const copyObj = getOtherInfoCopy(otherInfo);
    const currentlyEditingCategory = copyObj[e.target.id];
    currentlyEditingCategory[currentlyEditingCategory.length - 1] =
      e.target.value;
    setOtherInfo(copyObj);
  };

  const addButtonHandler = function addButtonHandler(e) {
    const copyObj = getOtherInfoCopy(otherInfo);
    const currentlyEditingArray = copyObj[e.target.id];
    const currentlyEditingItem =
      currentlyEditingArray[currentlyEditingArray.length - 1];
    const uuid = uuidv4();
    const addUUID = currentlyEditingItem + uuid;
    currentlyEditingArray[currentlyEditingArray.length - 1] = addUUID;
    currentlyEditingArray.push("");
    setOtherInfo(copyObj);
  };

  return (
    <>
      <div className="main-section-component">
        <h2 className="section-headings">Other Information</h2>
        <form className="section-form">
          <div className="other-info-container">
            <div className="other-info-input-row">
              <label htmlFor="skills">Skills</label>
              <input
                type="text"
                name="skills"
                id="skills"
                onChange={handleInput}
                value={otherInfo.skills[otherInfo.skills.length - 1]}
              />
            </div>
            <button type="button" id="skills" onClick={addButtonHandler}>
              Add
            </button>
          </div>
          <div className="other-info-container">
            <div className="other-info-input-row">
              <label htmlFor="languages">Languages</label>
              <input
                type="text"
                name="languages"
                id="languages"
                onChange={handleInput}
                value={otherInfo.languages[otherInfo.languages.length - 1]}
              />
            </div>
            <button type="button" id="languages" onClick={addButtonHandler}>
              Add
            </button>
          </div>
          <div className="other-info-container">
            <div className="other-info-input-row">
              <label htmlFor="hobbies">Hobbies</label>
              <input
                type="text"
                name="hobbies"
                id="hobbies"
                onChange={handleInput}
                value={otherInfo.hobbies[otherInfo.hobbies.length - 1]}
              />
            </div>
            <button type="button" id="hobbies" onClick={addButtonHandler}>
              ADD
            </button>
          </div>
        </form>
      </div>
      <div className="main-section-component">
        <ShowOtherInfo otherInfo={otherInfo} setOtherInfo={setOtherInfo} />
      </div>
    </>
  );
}

export { OtherInfo };
