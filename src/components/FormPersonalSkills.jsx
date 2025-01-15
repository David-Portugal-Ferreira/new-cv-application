import { useState } from "react";

export default function FormPersonalSkills({
  personalSkills,
  setPersonalSkills,
  children,
}) {
  const [skill, setSkill] = useState("");

  function addSkill(e) {
    e.preventDefault();
    setPersonalSkills([...personalSkills, skill]);
    setSkill("");
  }

  return (
    <div>
      <form onSubmit={addSkill}>
        <fieldset>
          <legend>Personal Skills</legend>
          <label htmlFor="skills">Skill</label>
          <input
            id="skills"
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />
          <input type="submit" />
        </fieldset>
      </form>
    </div>
  );
}
