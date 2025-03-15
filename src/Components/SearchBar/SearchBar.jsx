import { useState } from "react";
import "./SearchBar.css"

/* Need an input field, then be able to store it and search button/press enter */
const SearchBar = ({callback}) => {
  const [searchInput, setSearchInput] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault()
    callback(searchInput)
  }
  return (
    <>
      <div>
        <form action="/" className="SearchBar">
          <input
            type="text"
            className="SearchBarInput"
            placeholder="Search Song"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="SearchButton" onClick={handleSubmit}>
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
