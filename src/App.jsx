import { useState } from "react";
import "./App.css"
import PersonalInfo from "./components/PersonalInfo.jsx"
import FormPersonalInfo from "./components/FormPersonalInfo.jsx";

function App() {
    const [personalInfo, setPersonalInfo] = useState({
      name: "",
      email: "",
      phoneNumber: "",
    });
    const [educationExperience, setEducationExperience] = useState([]);
    const [praticalExperience, setPraticalExperience] = useState([]);

  return (
    <div className="wrapper">
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
        />
      </div>
      <div className="cv">
        <PersonalInfo
          name={personalInfo.name}
          email={personalInfo.email}
          phone={personalInfo.phoneNumber}
        />
      </div>
    </div>
  );
}

export default App
