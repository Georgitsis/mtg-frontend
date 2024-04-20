//import {} from "react";
import "./card-with-text-component.css";

function CardWithTextComponent(props) {
  const { card } = props;
  return (
    <li>
      <div>{card.imageUrl}</div>
      <img src={card.imageUrl} alt={"Image of " + card.name} className="card-image" />
    </li>
  );
}

export default CardWithTextComponent;
