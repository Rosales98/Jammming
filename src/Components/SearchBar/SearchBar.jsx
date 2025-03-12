import { useState } from "react";

const SearchBar = ({callback}) => {
  const [searchInput, setSearchInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    callback(searchInput)
  }
  return (
    <>
      <div>
        <form action="/" className="searchBar">
          <input
            type="text"
            className="searchBarInput"
            placeholder="Search Song"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default SearchBar;
