import "../styles/cv.css"

export default function Studies({ education }) {
  return (
    <div className="cvEducation">
      <h2>Education</h2>
      <p>School Name: {education.schoolName}</p>
      <p>Title of Study: {education.titleOfStudy}</p>
      <p>
          From {education.startDate} to {education.endDate}
        </p>
    </div>
  );
}
