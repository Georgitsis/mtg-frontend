import { useEffect } from "react";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import "./main-page.css";

function MainPage() {
  const handleQuery = async (queryString) => {
    try {
      const response = await fetch("https://api.magicthegathering.io/v1/cards?name=" + queryString);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {});

  return (
    <div className="main-page">
      <div className="header">Header</div>
      <SearchComponent className="search-element" handleQuery={handleQuery} />
      <div className="content">Content</div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default MainPage;
