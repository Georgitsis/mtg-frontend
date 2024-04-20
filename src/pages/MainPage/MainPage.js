import { useEffect, useState } from "react";
import "./main-page.css";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import SearchResult from "../../components/SearchResult/SearchResult";

function MainPage() {
  const [searchResultList, setSearchResultList] = useState([]);

  const handleQuery = async (queryString) => {
    try {
      setSearchResultList([]);
      const response = await fetch("https://api.magicthegathering.io/v1/cards?name=" + queryString);
      const data = await response.json();
      const filteredCardsList = data.cards.filter((card) => {
        if (card.number.slice(-1) != "★" && card.setName.slice(-6) != "Promos") return card;
      });
      setSearchResultList(filteredCardsList);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {});

  return (
    <div className="main-page">
      <div className="header">Header</div>
      <SearchComponent className="search-element" handleQuery={handleQuery} />
      <SearchResult className="search-result" searchResultList={searchResultList} />
      <div className="footer">Footer</div>
    </div>
  );
}

export default MainPage;
