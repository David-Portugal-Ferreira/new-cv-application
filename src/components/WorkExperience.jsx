import "../styles/workExperience.css"

export default function WorkExperience({
  praticalExperience,
  setPraticalExperience,
}) {
  function removeExperience(id) {
    const updatedExperiences = praticalExperience.filter((experience) => {
        return experience.id !== id;
    });
    setPraticalExperience(updatedExperiences)
  }
  return (
    <div>
      <ul className="individualExperiences">
        {praticalExperience.length > 0 &&
          praticalExperience.map((experience, index) => (
            <li key={index}>
              {experience.companyName}{" "}
              <button onClick={() => removeExperience(experience.id)}>
                Remove
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
