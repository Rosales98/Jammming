import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import Results from "../SearchResults/SearchResults";

/* every components will come here to be displayed on main/index. Searchbar, results and playlis should be here.*/
function App() {
  

  return (
    <>
      <h1>Jammming</h1>
      <div className="App">
      <SearchBar />
      <div className="App-playlist">
      <Results />
      
      </div>
      </div>
    </>
  );
}

export default App;
