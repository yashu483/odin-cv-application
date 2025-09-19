class NewProject {
  constructor() {
    this.projectName = "";
    this.skillStack = "";
    this.githubLink = "";
    this.liveSiteLink = "";
    this.projectSummary = "";
    this.isSelected = true;
    this.added = false;
  }
}

function ProjectCard({ currentProjectObj, projectArray, setProjectData }) {
  const editButtonHandler = function editButtonHandler(e) {
    const cardId = e.target.id;

    const projectArrayAfterEdit = projectArray.map((obj) => {
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

    const removeNullFromProjectArray = projectArrayAfterEdit.filter(
      (item) => item !== null
    );

    setProjectData(removeNullFromProjectArray);
  };
  const deleteButtonHandler = function deleteButtonHandler(e) {
    const arrayAfterRemovedProject = projectArray.filter(
      (obj) => obj.id !== e.target.id
    );

    const copiedArray = arrayAfterRemovedProject.map((obj) => ({ ...obj }));
    setProjectData(copiedArray);
  };
  return (
    <div className="educational-card">
      <div className="project-card-detail">
        <h3>{`Project Name: ${currentProjectObj.projectName}`}</h3>
        <p>{`Skill Stack: ${currentProjectObj.skillStack}`}</p>
        <p>
          Github Repo Link:{" "}
          <a
            href={`${currentProjectObj.githubLink}`}
          >{`${currentProjectObj.githubLink}`}</a>
        </p>
        <p>
          Live Site Link:{" "}
          <a
            href={`${currentProjectObj.liveSiteLink}`}
          >{`${currentProjectObj.liveSiteLink}`}</a>
        </p>
      </div>
      <div className="project-card-button-container">
        <button
          type="button"
          onClick={editButtonHandler}
          id={currentProjectObj.id}
          className="card-edit-button"
        >
          Edit
        </button>
        <button
          type="button"
          id={currentProjectObj.id}
          onClick={deleteButtonHandler}
          className="card-delete-button"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
function ShowProjects({ projectData, setProjectData }) {
  return (
    <>
      {projectData.map((obj) => {
        if (obj.isAdded) {
          return (
            <ProjectCard
              currentProjectObj={obj}
              projectArray={projectData}
              setProjectData={setProjectData}
              key={obj.id}
            />
          );
        } else return null;
      })}
    </>
  );
}
function Project({ projectData, setProjectData }) {
  let currentlyEditingProjectIndex;

  const currentlyEditingProjectObj = projectData.filter((obj, index) => {
    if (obj.isSelected) {
      currentlyEditingProjectIndex = index;
    }
    return obj.isSelected;
  })[0];

  const currentlyEditingProject = { ...currentlyEditingProjectObj };

  const handleInput = function handleInput(e) {
    const { name, value } = e.target;
    const projectWithNewValue = { ...currentlyEditingProject, [name]: value };
    const newProjectArray = projectData.map((obj, index) => {
      if (index === currentlyEditingProjectIndex) {
        return projectWithNewValue;
      } else {
        return { ...obj };
      }
    });
    setProjectData(newProjectArray);
  };
  const addButtonHandler = function addButtonHandler() {
    currentlyEditingProject.isSelected = false;
    currentlyEditingProject.isAdded = true;

    const updatedProjectArray = projectData.map((obj, index) => {
      return index === currentlyEditingProjectIndex
        ? currentlyEditingProject
        : { ...obj };
    });
    updatedProjectArray.push(new NewProject());
    setProjectData(updatedProjectArray);
  };
  const renderProjects = function renderProjects() {
    const totalAddedProjects = projectData.filter((obj) => obj.isAdded).length;
    return totalAddedProjects === 0 ? (
      <>
        <h2 className="section-headings">
          <b>Your Projects</b>
        </h2>
        <p style={{ textAlign: "start" }}>No projects added.</p>
      </>
    ) : (
      <>
        <h2 className="section-headings">Your Projects</h2>
        <ShowProjects
          projectData={projectData}
          setProjectData={setProjectData}
        />
      </>
    );
  };

  return (
    <>
      <div className="main-section-component">
        <h2 className="section-headings">Projects</h2>
        <form className="section-form" id="project-form">
          <div className="single-input-row">
            <label htmlFor="projectName">
              Project Name
              <span className="aria-label" aria-label="required">
                *
              </span>
            </label>
            <input
              type="text"
              name="projectName"
              id="projectName"
              onChange={handleInput}
              value={currentlyEditingProject.projectName}
              required
            />
          </div>
          <div className="single-input-row">
            <label htmlFor="skillStack">
              Skill Stack
              <span className="aria-label" aria-label="required">
                *
              </span>
            </label>
            <input
              type="text"
              id="skillStack"
              name="skillStack"
              onChange={handleInput}
              value={currentlyEditingProject.skillStack}
              required
            />
            <p style={{ textAlign: "start" }}>
              Use comma separated value for multiple skill.
            </p>
          </div>
          <div className="double-input-row">
            <div className="input-in-double-input-row">
              <label htmlFor="githubLink">
                Github Repo Link
                <span className="aria-label" aria-label="required">
                  *
                </span>
              </label>
              <input
                type="url"
                id="githubLink"
                name="githubLink"
                onChange={handleInput}
                value={currentlyEditingProject.githubLink}
                required
              />
            </div>
            <div className="input-in-double-input-row">
              <label htmlFor="liveSiteLink">
                Live Demo Link
                <span className="aria-label" aria-label="required">
                  *
                </span>
              </label>
              <input
                type="url"
                id="liveSiteLink"
                name="liveSiteLink"
                onChange={handleInput}
                value={currentlyEditingProject.liveSiteLink}
                required
              />
            </div>
          </div>
          <div className="single-input-row">
            <label htmlFor="projectSummary">Project Summary (Optional)</label>
            <textarea
              name="projectSummary"
              id="projectSummary"
              onChange={handleInput}
              value={currentlyEditingProject.projectSummary}
            ></textarea>
          </div>
          <button
            type="submit"
            className="education-add-button"
            onClick={(e) => {
              e.preventDefault();
              const projectForm = document.querySelector("#project-form");
              projectForm.reportValidity();
              if (projectForm.checkValidity()) {
                addButtonHandler();
              }
            }}
          >
            Add
          </button>
        </form>
      </div>
      <div className="main-section-component card-container">
        {renderProjects()}
      </div>
    </>
  );
}

export { Project, NewProject };
