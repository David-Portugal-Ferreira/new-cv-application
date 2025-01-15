import { useState } from "react";
import "../styles/forms.css";

export default function FormPersonalInfo({
  name,
  onChangeName,
  email,
  onChangeEmail,
  phone,
  onChangePhone,
  aboutMe,
  onChangeAboutMe,
}) {
  return (
    <div>
      <form>
        <fieldset>
          <legend>General Information</legend>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={onChangeName}
            placeholder="Your Name"
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={onChangeEmail}
            placeholder="Email"
          />
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="number"
            value={phone}
            onChange={onChangePhone}
            placeholder="Phone Number"
          />
          <label htmlFor="aboutMe">About Me</label>
          <textarea
            name=""
            id="aboutMe"
            value={aboutMe}
            onChange={onChangeAboutMe}
          ></textarea>
        </fieldset>
      </form>
    </div>
  );
}
