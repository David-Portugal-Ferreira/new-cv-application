import "../styles/cv.css"

export default function Skills({ skills }) {
    return (
      <div className="cvPersonalSkills">
        <h2>Skills</h2>
        <div className="cvIndividualSkills">
          {skills.map((skill, index) => {
            return (
              <p key={index} className="cvIndividualSkill">
                {skill}
              </p>
            );
          })}
        </div>
      </div>
    );
}