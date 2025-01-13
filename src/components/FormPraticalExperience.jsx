import { useState } from "react";

export default function FormPraticalExperience({
  children,
  addPraticalExperience,
  removePraticalExperience,
}) {
  const [addExperience, setAddExperience] = useState(false);
  const [workExperience, setWorkExperience] = useState({
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
    setWorkExperience({
      companyName: "",
      positionTitle: "",
      mainResponsabilities: "",
      startDate: "",
      endDate: "",
    });
  }

  return (
    <div>
      <div>{children}</div>
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
              <label htmlFor="">Company Name</label>
              <input
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
              <label htmlFor="">Position Title</label>
              <input
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
              <label htmlFor="">Main Responsabilities</label>
              <input
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
              <label htmlFor="">Start Date</label>
              <input
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
              <label htmlFor="">End Date</label>
              <input
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
              <input type="submit" />
              <input
                type="button"
                value={"Cancel"}
                onClick={() => {
                  setAddExperience(!addExperience);
                  setWorkExperience({
                    companyName: "",
                    positionTitle: "",
                    mainResponsabilities: "",
                    startDate: "",
                    endDate: "",
                  });
                }}
              />
            </fieldset>
          </form>
        </div>
      )}
    </div>
  );
}
