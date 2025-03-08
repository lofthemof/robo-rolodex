import "./card-list.styles.css";
import Card from "../card-container/card-container.component";

const CardList = ({ robots }) => (
  <div className="card-list">
    {robots.map((robot) => (
      <Card robot={robot} key={robot.id} />
    ))}
  </div>
);

export default CardList;
