import "../SearchResults/SearchResults.css";
import Tracklist from "../Tracklist/Tracklist"

/* should display search result */
const Results = () => {
  return (
    <>
      <div className="results-container">
        <h2>Results</h2>
       <Tracklist/>
      </div>
    </>
  );
}

export default Results;
