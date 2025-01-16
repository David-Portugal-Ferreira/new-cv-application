import "../styles/cv.css"

export default function Skills({ skills }) {
    return (
      <div className="personalSkills">
        <h2>Skills</h2>
        <div className="individualSkills">
          {skills.map((skill, index) => {
            return (
              <p key={index} className="individualSkill">
                {skill}
              </p>
            );
          })}
        </div>
      </div>
    );
}