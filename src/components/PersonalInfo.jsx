export default function PersonalInfo({name, email, phone}) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    )
}