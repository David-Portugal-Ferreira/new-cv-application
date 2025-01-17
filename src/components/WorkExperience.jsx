import "../styles/forms.css";

export default function WorkExperience({
  praticalExperience,
  setPraticalExperience,
}) {
  function removeExperience(id) {
    const updatedExperiences = praticalExperience.filter((experience) => {
      return experience.id !== id;
    });
    setPraticalExperience(updatedExperiences);
  }
  return (
    <div className="workExperiences">
      <ul className="individualExperiences">
        {praticalExperience.length > 0 &&
          praticalExperience.map((experience, index) => (
            <li key={index}>
              <p>
                {experience.companyName}{" "}
                <button
                  className="removeExperience"
                  onClick={() => removeExperience(experience.id)}
                >
                  X
                </button>
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}
