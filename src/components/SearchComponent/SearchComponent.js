import { useState } from "react";
import "./search-component.css";

function SearchComponent(props) {
  const { className, handleQuery } = props;

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = (querryString) => {
    handleQuery(querryString); // Call handleQuerry when the button is clicked
  };

  return (
    <div className={className}>
      <input className="my-input" value={inputValue} onChange={handleChange}></input>
      <button className="search-button" onClick={() => handleClick(inputValue)}>
        Search
      </button>
    </div>
  );
}

export default SearchComponent;
