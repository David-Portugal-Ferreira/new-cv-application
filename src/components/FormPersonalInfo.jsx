import { useState } from "react";
import "../styles/forms.css"

export default function FormPersonalInfo({
  name,
  onChangeName,
  email,
  onChangeEmail,
  phone,
  onChangePhone,
}) {
  const [editable, setEditable] = useState(false);
  function saveData(e) {
    e.preventDefault();
    setEditable(!editable);
  }

  return (
    <div>
      <form onSubmit={saveData}>
        <fieldset>
          <legend>General Information</legend>
          <label htmlFor="name">
            Name <span className="required">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={onChangeName}
            required
            disabled={editable}
            placeholder="Your Name"
          />
          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={onChangeEmail}
            required
            disabled={editable}
            placeholder="Email"
          />
          <label htmlFor="phone">
            Phone <span className="required">*</span>
          </label>
          <input
            type="number"
            value={phone}
            onChange={onChangePhone}
            required
            disabled={editable}
            placeholder="Phone Number"
          />
          {editable ? (
            <input type="button" value={"Edit"} onClick={saveData} />
          ) : (
            <input type="submit" value={"Save"} />
          )}
        </fieldset>
      </form>
    </div>
  );
}
