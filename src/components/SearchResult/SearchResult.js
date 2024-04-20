import { useEffect } from "react";
//import "./search-result.css";

function SearchResult(props) {
  const { className, searchResultList } = props;

  //const [displayedCardsList, setDisplayedCardsList] = useState(...searchResultList);
  useEffect(() => {
    console.log(className);
    console.log("searchResultList in SearchResult :", searchResultList);
  });

  return (
    <div className={className}>
      <ul>
        {searchResultList.map((card, index) => (
          <li key={index}>
            <img src={card.imageUrl} alt={"Image of " + card.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResult;
