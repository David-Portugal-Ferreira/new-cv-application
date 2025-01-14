import "../styles/cv.css";

export default function PersonalInfo({ name, email, phone }) {
  return (
    <div className="cvPersonalInfo">
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
}
