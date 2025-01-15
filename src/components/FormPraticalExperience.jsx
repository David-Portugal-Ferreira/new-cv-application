import { useState } from "react";
import "../styles/workExperience.css";

export default function FormPraticalExperience({
  children,
  addPraticalExperience,
  praticalExperience,
}) {
  const [addExperience, setAddExperience] = useState(false);
  const [workExperience, setWorkExperience] = useState({
    id: praticalExperience.length,
    companyName: "",
    positionTitle: "",
    mainResponsabilities: "",
    startDate: "",
    endDate: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setAddExperience(!addExperience);
    addPraticalExperience(workExperience);
    setWorkExperience((prevExperience) => ({
      id: prevExperience.id + 1,
      companyName: "",
      positionTitle: "",
      mainResponsabilities: "",
      startDate: "",
      endDate: "",
    }));
  }

  return (
    <div className="experiences">
      <h3>Work Experiences</h3>
      {children}
      {!addExperience && (
        <input
          type="button"
          value={"Add Experience"}
          onClick={() => setAddExperience(!addExperience)}
        />
      )}
      {addExperience && (
        <div className="work_experience_form">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Pratical Experience</legend>
              <label htmlFor="companyName">
                Company Name <span>*</span>
              </label>
              <input
                id="companyName"
                type="text"
                value={workExperience.companyName}
                required
                onChange={(e) =>
                  setWorkExperience({
                    ...workExperience,
                    companyName: e.target.value,
                  })
                }
              />
              <label htmlFor="positionTitle">
                Position Title <span>*</span>
              </label>
              <input
                id="positionTitle"
                type="text"
                value={workExperience.positionTitle}
                required
                onChange={(e) =>
                  setWorkExperience({
                    ...workExperience,
                    positionTitle: e.target.value,
                  })
                }
              />
              <label htmlFor="responsabilitites">
                Main Responsabilities <span>*</span>
              </label>
              <textarea
                id="responsabilitites"
                type="text"
                value={workExperience.mainResponsabilities}
                required
                onChange={(e) =>
                  setWorkExperience({
                    ...workExperience,
                    mainResponsabilities: e.target.value,
                  })
                }
              />
              <label htmlFor="startDate">
                Start Date <span>*</span>
              </label>
              <input
                id="startDate"
                type="date"
                value={workExperience.startDate}
                required
                onChange={(e) =>
                  setWorkExperience({
                    ...workExperience,
                    startDate: e.target.value,
                  })
                }
              />
              <label htmlFor="endDate">
                End Date <span>*</span>
              </label>
              <input
                id="endDate"
                type="date"
                value={workExperience.endDate}
                required
                onChange={(e) =>
                  setWorkExperience({
                    ...workExperience,
                    endDate: e.target.value,
                  })
                }
              />
              <div className="formButtons">
                <input type="submit" />
                <input
                  type="button"
                  value={"Cancel"}
                  onClick={() => {
                    setAddExperience(!addExperience);
                    setWorkExperience({
                      id: praticalExperience.length,
                      companyName: "",
                      positionTitle: "",
                      mainResponsabilities: "",
                      startDate: "",
                      endDate: "",
                    });
                  }}
                />
              </div>
            </fieldset>
          </form>
        </div>
      )}
    </div>
  );
}
