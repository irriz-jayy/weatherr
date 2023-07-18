import "./App.css";

function App() {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Seaaarch");
  };
  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <h1 className="title">Weatherr App</h1>
          <input
            type="text"
            className="search"
            placeholder="Enter location..."
          />
          <button className="button" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="details">
          <p>Town</p>
          <h1>Temperature</h1>
          <p>Cloudy or not</p>
          <p>Humidity</p>
        </div>
      </div>
    </div>
  );
}

export default App;
