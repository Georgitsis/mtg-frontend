//import {} from "react";
import "./card-with-text-component.css";
import ManaCost from "../ManaCost/ManaCost";

function CardWithTextComponent(props) {
  const { card, className } = props;
  return (
    <li className={className}>
      <img
        src={card.imageUrl ? card.imageUrl : "/assets/images/NoImage.png"}
        alt={"Image of " + card.name}
        className="card-image"
      />
      <div className="card-header">
        <div className="card-name">{card.name}</div>

        {card.manaCost ? <ManaCost className="mana-cost" manaCost={card.manaCost} /> : <></>}
      </div>
      <div className="card-type">{card.type}</div>
      <div className="card-text">{card.text}</div>
      {card.power ? <div className="card-pow-tough">{card.power + " / " + card.toughness}</div> : <></>}
    </li>
  );
}

export default CardWithTextComponent;
