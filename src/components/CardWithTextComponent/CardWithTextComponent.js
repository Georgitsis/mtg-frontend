//import {} from "react";
import "./card-with-text-component.css";
import noImage from "../../assets/images/NoImage.png";

function CardWithTextComponent(props) {
  const { card, className } = props;
  console.log(card);
  return (
    <li className={className}>
      <img src={card.imageUrl ? card.imageUrl : noImage} alt={"Image of " + card.name} className="card-image" />
      <div className="card-header">
        <div className="card-name">{card.name}</div>
        <ManaCost />
      </div>
      <div className="card-type">{card.type}</div>
      <div className="card-text">{card.text}</div>
      {card.power ? <div className="card-pow-tough">{card.power + " / " + card.toughness}</div> : <></>}
    </li>
  );
}

export default CardWithTextComponent;
