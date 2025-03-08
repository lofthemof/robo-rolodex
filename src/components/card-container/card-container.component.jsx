import "./card-container.styles.css";

const Card = ({ robot }) => {
  const { name, id, email } = robot;

  return (
    <div className="card-container" key={id}>
      <img
        alt={`robot ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      ></img>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
