import { useEffect } from "react";
import "./search-result.css";
import CardWithTextComponent from "../CardWithTextComponent/CardWithTextComponent";

function SearchResult(props) {
  const { className, searchResultList } = props;

  //const [displayedCardsList, setDisplayedCardsList] = useState(...searchResultList);
  useEffect(() => {});

  return (
    <div className={className}>
      <h1>Search result</h1>
      <hr></hr>
      <ul className="displayed-cards-list">
        {searchResultList.map((card, index) => (
          <CardWithTextComponent className="card-with-text" key={"card-" + index} card={card} />
        ))}
      </ul>
    </div>
  );
}

export default SearchResult;
