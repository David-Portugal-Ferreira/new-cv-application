export default function Experiences({ praticalExperience }) {
  return (
    <div className="cvExperiences">
      <h2>Work Experience</h2>
      {praticalExperience.map((experience, index) => {
        return (
          <div key={index} className="individualExperience">
            <hr />
            <p>Company Name: {experience.companyName}</p>
            <p>Position: {experience.positionTitle}</p>
            <p>Responsabilities: {experience.mainResponsabilities}</p>
            <p>Start Date: {experience.startDate}</p>
            <p>End Date: {experience.endDate}</p>
          </div>
        );
      })}
    </div>
  );
}
