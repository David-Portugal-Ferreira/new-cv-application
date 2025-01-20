import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo.jsx";
import FormPersonalInfo from "./components/FormPersonalInfo.jsx";
import FormEducationalExperience from "./components/FormEducationalExperience.jsx";
import FormPraticalExperience from "./components/FormPraticalExperience.jsx";
import FormPersonalSkills from "./components/FormPersonalSkills.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import Experiences from "./components/Experiences.jsx";
import Studies from "./components/Studies.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    aboutMe: "",
  });
  const [educationExperience, setEducationExperience] = useState({
    schoolName: "",
    titleOfStudy: "",
    startDate: "",
    endDate: "",
  });
  const [personalSkills, setPersonalSkills] = useState([]);
  const [praticalExperience, setPraticalExperience] = useState([]);

  const handleDownloadPdf = () => {
    document.title = "my_cv";
    window.print();
    document.title = "Build Your CV Online"
  };

  const todayDate = new Date();
  const maxDate = () => {
    let month = null;
    if (todayDate.getMonth() + 1 < 10) {
      month = `0${todayDate.getMonth() + 1}`;
    }
    return `${todayDate.getFullYear()}-${month}-${todayDate.getDate()}`;
  };
  const date = maxDate();

  return (
    <>
      <div className="forms">
        <FormPersonalInfo
          name={personalInfo.name}
          onChangeName={(e) =>
            setPersonalInfo({ ...personalInfo, name: e.target.value })
          }
          email={personalInfo.email}
          onChangeEmail={(e) =>
            setPersonalInfo({ ...personalInfo, email: e.target.value })
          }
          phone={personalInfo.phoneNumber}
          onChangePhone={(e) =>
            setPersonalInfo({ ...personalInfo, phoneNumber: e.target.value })
          }
          aboutMe={personalInfo.aboutMe}
          onChangeAboutMe={(e) =>
            setPersonalInfo({ ...personalInfo, aboutMe: e.target.value })
          }
        />
        <FormEducationalExperience
          schoolName={educationExperience.schoolName}
          onChangeSchoolName={(e) =>
            setEducationExperience({
              ...educationExperience,
              schoolName: e.target.value,
            })
          }
          titleOfStudy={educationExperience.titleOfStudy}
          onChangeTitleOfStudy={(e) =>
            setEducationExperience({
              ...educationExperience,
              titleOfStudy: e.target.value,
            })
          }
          startDate={educationExperience.startDate}
          onChangeStartDate={(e) =>
            setEducationExperience({
              ...educationExperience,
              startDate: e.target.value,
            })
          }
          endDate={educationExperience.endDate}
          onChangeEndDate={(e) =>
            setEducationExperience({
              ...educationExperience,
              endDate: e.target.value,
            })
          }
          todayDate={date}
        />
        <FormPersonalSkills
          personalSkills={personalSkills}
          setPersonalSkills={setPersonalSkills}
        ></FormPersonalSkills>
        <FormPraticalExperience
          praticalExperience={praticalExperience}
          addPraticalExperience={(experince) =>
            setPraticalExperience([...praticalExperience, experince])
          }
          removePraticalExperience={praticalExperience.filter(
            (experience, id) => experience.id !== id
          )}
          todayDate={date}
        >
          <WorkExperience
            praticalExperience={praticalExperience}
            setPraticalExperience={setPraticalExperience}
          />
        </FormPraticalExperience>
        <button className="saveAsPdf" onClick={handleDownloadPdf}>
          Download PDF
        </button>
      </div>
      <div className="cv">
        <PersonalInfo
          name={personalInfo.name}
          email={personalInfo.email}
          phone={personalInfo.phoneNumber}
          aboutMe={personalInfo.aboutMe}
        />
        <Studies education={educationExperience} />
        {personalSkills.length > 0 && <Skills skills={personalSkills} />}
        <Experiences praticalExperience={praticalExperience} />
      </div>
    </>
  );
}

export default App;
