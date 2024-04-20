import { useEffect } from "react";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import "./main-page.css";

function MainPage() {
  const handleQuerry = (querryString) => {
    console.log("handleQuerry in MainPage: ", querryString);
  };

  useEffect(() => {});

  return (
    <div className="main-page">
      <div className="header">Header</div>
      <SearchComponent className="search-element" handleQuerry={handleQuerry} />
      <div className="content">Content</div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default MainPage;
