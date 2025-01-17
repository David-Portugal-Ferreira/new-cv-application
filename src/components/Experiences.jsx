import "../styles/cv.css"

export default function Experiences({ praticalExperience }) {

  function writeResponsabilities(experience) {
    const responsabilities = experience.split("\n");
    return responsabilities.map((resp, index) => <p key={index}>{resp}</p>)
  }

  return (
    <div className="cvExperiences">
      <h2>Work Experience</h2>
      {praticalExperience.map((experience, index) => {
        return (
          <div key={index} className="cvIndividualExperience">
            <p>Company Name: {experience.companyName}</p>
            <p>Position: {experience.positionTitle}</p>
            <p>
              Responsabilities:{" "}
              {writeResponsabilities(experience.mainResponsabilities)}
            </p>
            <p>
              From {experience.startDate} To {experience.endDate}
            </p>
            {praticalExperience.length > 1 && <hr />}
          </div>
        );
      })}
    </div>
  );
}
