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

  console.log(personalSkills)

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
        >
          <WorkExperience
            praticalExperience={praticalExperience}
            setPraticalExperience={setPraticalExperience}
          />
        </FormPraticalExperience>
      </div>
      <div className="cv">
        <PersonalInfo
          name={personalInfo.name}
          email={personalInfo.email}
          phone={personalInfo.phoneNumber}
          aboutMe={personalInfo.aboutMe}
        />
        <Studies education={educationExperience} />
        <Experiences praticalExperience={praticalExperience} />
      </div>
    </>
  );
}

export default App;
