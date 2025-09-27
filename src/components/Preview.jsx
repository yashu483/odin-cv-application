import html2pdf from "html2pdf.js";

import githubIcon from "./../assets/icons/github-mark-white.svg";
import linkedInIcon from "./../assets/icons/linkedin.png";
import mailIcon from "./../assets/icons/mail.png";
import globeIcon from "./../assets/icons/globe.png";

const getAddedDataNumber = function getAddedDataNumber(array) {
  const newArray = array.filter((obj) => obj.isAdded);
  return newArray.length;
};
const ProjectCard = function ProjectCard({ projectData }) {
  return getAddedDataNumber(projectData) === 0 ? null : (
    <div className="resume-project-info-container">
      <h2 className="resume-h2">Projects</h2>
      {projectData
        .filter((obj) => obj.isAdded)
        .map((obj) => {
          return (
            <div className="resume-project-card" key={obj.id}>
              <h3 className="resume-h3">{obj.projectName}</h3>
              <p className="resume-project-info-p">
                <span className="resume-info-span">Skill Stack: </span>
                {`${obj.skillStack}`}
              </p>
              <p className="resume-project-info-p">
                <span className="resume-info-span">Code Base: </span>
                {`${obj.githubLink}`}
              </p>
              <p className="resume-project-info-p">
                <span className="resume-info-span">Live Site: </span>
                {`${obj.liveSiteLink}`}
              </p>
              <p className="resume-project-info-p">
                <span className="resume-info-span">Description: </span>
                {obj.projectSummary}
              </p>
            </div>
          );
        })}
    </div>
  );
};
const ExperienceCard = function ExperienceCard({ experienceData }) {
  return getAddedDataNumber(experienceData) === 0 ? null : (
    <div className="resume-project-info-container">
      <h2 className="resume-h2 ">Work Experience</h2>
      {experienceData
        .filter((obj) => obj.isAdded)
        .map((obj) => {
          return (
            <div className="resume-project-card" key={obj.id}>
              <h3 className="resume-h3">{obj.companyName}</h3>
              <p className="resume-project-info-p">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-calendar"
                  aria-hidden="true"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                {` ${obj.startDate} - ${obj.endDate}`}
                <span className="invisible-20px">HAHA</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {` ${obj.location}`}
              </p>
              <h4 className="resume-h4">{obj.jobRole}</h4>
              <p className="resume-project-info-p">{obj.jobDescription}</p>
            </div>
          );
        })}
    </div>
  );
};
const EducationCard = function EducationCard({ educationalData }) {
  return getAddedDataNumber(educationalData) === 0 ? null : (
    <div className="resume-project-info-container">
      <h2 className="resume-h2">Education</h2>
      {educationalData
        .filter((obj) => obj.isAdded)
        .map((obj) => {
          return (
            <div key={obj.id} className="resume-project-card">
              <h3 className="resume-h3">{`${obj.degree} - ${obj.collegeName}`}</h3>
              <p className="resume-project-info-p">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-calendar"
                  aria-hidden="true"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                {` ${obj.startYear} - ${obj.graduatingYear}`}
                <span className="invisible-20px">HAHA</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {` ${obj.location}`}
              </p>
              <p className="resume-project-info-p">
                <span className="resume-info-span">Achievements: </span>
                {obj.achievements}
              </p>
            </div>
          );
        })}
    </div>
  );
};

const ResumeOtherInfoCard = function ResumeOtherInfoCard({
  otherInfoCategoryName,
  otherInfoCategoryArray,
}) {
  if (otherInfoCategoryArray.length > 1) {
    const lastArrayIndex = otherInfoCategoryArray.length - 1;
    return (
      <div className="resume-left-section-row">
        <h3 className="left-section-h3">{otherInfoCategoryName}</h3>
        <ul>
          {otherInfoCategoryArray.map((item, index) => {
            if (index !== lastArrayIndex) {
              const uuid = item.slice(-36);
              return (
                <li key={uuid} className="left-section-value-p">
                  {item.slice(0, -36)}
                </li>
              );
            } else return null;
          })}
        </ul>
      </div>
    );
  } else return null;
};

function Preview({
  personalData,
  educationalData,
  experienceData,
  projectData,
  otherInfo,
}) {
  const handleDownload = () => {
    const element = document.getElementById("resume");
    const opt = {
      margin: 10,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };
  return (
    <>
      <div className="main-section-component">
        <h2 className="section-headings">Preview</h2>
        <div className="preview" id="resume">
          <div className="resume-left-section">
            {personalData.profilePicUrl ? (
              <div className="resume-profile-pic-container">
                <img
                  src={personalData.profilePicUrl}
                  alt="Profile Pic Preview"
                  className="resume-profile-pic"
                />
              </div>
            ) : null}
            <div>
              {(personalData.phone.length !== 0 ||
                personalData.email.length !== 0 ||
                personalData.address.length !== 0 ||
                personalData.github.length !== 0 ||
                personalData.linkedIn.length !== 0 ||
                personalData.personalSite.length !== 0) && (
                <h3 className="left-section-h3">CONTACT</h3>
              )}
              {personalData.phone.length !== 0 && (
                <div className="left-section-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone-incoming"
                    aria-hidden="true"
                  >
                    <polyline points="16 2 16 8 22 8"></polyline>
                    <line x1="22" x2="16" y1="2" y2="8"></line>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <p className="left-section-value-p">{personalData.phone}</p>
                </div>
              )}
              {personalData.email.length !== 0 && (
                <div className="left-section-row">
                  <img src={mailIcon} alt="" />
                  <p className="left-section-value-p">{personalData.email}</p>
                </div>
              )}
              {personalData.address.length !== 0 && (
                <div className="left-section-row">
                  <img src={globeIcon} alt="" />
                  <p className="left-section-value-p">{personalData.address}</p>
                </div>
              )}
              {personalData.personalSite.length !== 0 && (
                <div className="left-section-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-globe"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                  <p className="left-section-value-p">
                    {personalData.personalSite}
                  </p>
                </div>
              )}
              {personalData.github.length !== 0 && (
                <div className="left-section-row">
                  <img
                    src={githubIcon}
                    alt="Github Icon"
                    className="left-section-icons"
                  />
                  <p className="left-section-value-p">{personalData.github}</p>
                </div>
              )}
              {personalData.linkedIn.length !== 0 && (
                <div className="left-section-row">
                  <img
                    src={linkedInIcon}
                    alt="Linkedin Icon"
                    className="left-section-icons"
                  />
                  <p className="left-section-value-p">
                    {personalData.linkedIn}
                  </p>
                </div>
              )}
            </div>
            {
              <ResumeOtherInfoCard
                otherInfoCategoryName={`Technical Skills`}
                otherInfoCategoryArray={otherInfo.technicalSkills}
              />
            }
            {
              <ResumeOtherInfoCard
                otherInfoCategoryName={`Soft Skills`}
                otherInfoCategoryArray={otherInfo.skills}
              />
            }
            {
              <ResumeOtherInfoCard
                otherInfoCategoryName={`Languages`}
                otherInfoCategoryArray={otherInfo.languages}
              />
            }
            {
              <ResumeOtherInfoCard
                otherInfoCategoryName={`Hobbies`}
                otherInfoCategoryArray={otherInfo.hobbies}
              />
            }
          </div>
          <div className="resume-right-section">
            <h1 className="resume-full-name">{personalData.fullName}</h1>
            {personalData.summary.length !== 0 && (
              <>
                <h2 className="resume-h2">About Me</h2>
                <p className="resume-detail-paragraphs resume-project-info-p">
                  {personalData.summary}
                </p>
              </>
            )}
            {<ProjectCard projectData={projectData} />}
            {<ExperienceCard experienceData={experienceData} />}
            {<EducationCard educationalData={educationalData} />}
          </div>
        </div>
      </div>
      <button
        type="button"
        className="download-button"
        onClick={handleDownload}
        style={{ cursor: "pointer" }}
      >
        DOWNLOAD
      </button>
    </>
  );
}

export default Preview;
