import { useState } from "react";

export default function FormPersonalSkills({
  personalSkills,
  setPersonalSkills,
}) {
  const [skill, setSkill] = useState("");

  function addSkill(e) {
    e.preventDefault();
    setPersonalSkills([...personalSkills, skill]);
    setSkill("");
  }

  function removeSkill(skill) {
    const newSkillArray = personalSkills.filter((skills) => {
      return skills !== skill;
    });

    setPersonalSkills(newSkillArray);
  }

  return (
    <div className="skills">
      <form onSubmit={addSkill}>
        <fieldset>
          <legend>Personal Skills</legend>
          <label htmlFor="skillInput">Skill</label>
          <input
            id="skillInput"
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            required
          />
          <input type="submit" value={"Add"}/>
        </fieldset>
      </form>
      {personalSkills.length > 0 && (
        <>
          <h3>Skills</h3>
          <div className="displaySkills">
            {personalSkills.map((skill, index) => {
              return (
                <p key={index} className="individualSkill">
                  {skill}{" "}
                  <button
                    className="removeSkill"
                    onClick={() => removeSkill(skill)}
                  >
                    X
                  </button>
                </p>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
