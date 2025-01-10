import { useState } from "react";
import "../styles/forms.css"

export default function FormEducationalExperience({
  schoolName,
  onChangeSchoolName,
  titleOfStudy,
  onChangeTitleOfStudy,
  startDate,
  onChangeStartDate,
  endDate,
  onChangeEndDate,
}) {
  const [isDisabled, setIsDisabled] = useState(false);

  function saveChanges(e) {
    e.preventDefault();
    setIsDisabled(!isDisabled);
  }

  return (
    <div>
      <form onSubmit={saveChanges}>
        <fieldset>
          <legend>Education</legend>
          <label htmlFor="schoolName">School Name</label>
          <input
            id="schoolName"
            type="text"
            disabled={isDisabled}
            required
            value={schoolName}
            onChange={onChangeSchoolName}
          />
          <label htmlFor="titleOfState">Title of Study</label>
          <input
            id="titleOfState"
            type="text"
            disabled={isDisabled}
            required
            value={titleOfStudy}
            onChange={onChangeTitleOfStudy}
          />
          <label htmlFor="startDate">Start Date</label>
          <input
            id="startDate"
            type="date"
            disabled={isDisabled}
            required
            value={startDate}
            onChange={onChangeStartDate}
          />
          <label htmlFor="endDate">End Date</label>
          <input
            id="endDate"
            type="date"
            disabled={isDisabled}
            required
            value={endDate}
            onChange={onChangeEndDate}
          />
          {isDisabled ? (
            <input type="button" value={"Edit"} onClick={saveChanges} />
          ) : (
            <input type="submit" value={"Save"} />
          )}
        </fieldset>
      </form>
    </div>
  );
}
