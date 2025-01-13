export default function WorkExperience({
  praticalExperience,
  setPraticalExperience,
}) {
  function removeExperience(name) {
    const updatedExperiences = praticalExperience.filter((experience) => {
        return experience.companyName !== name;
    });
    setPraticalExperience(updatedExperiences)
  }
  return (
    <div>
      {praticalExperience.length > 0 &&
        praticalExperience.map((experience, index) => (
          <p key={index}>
            {experience.companyName}{" "}
            <button onClick={() => removeExperience(experience.companyName)}>
              Remove
            </button>
          </p>
        ))}
    </div>
  );
}
