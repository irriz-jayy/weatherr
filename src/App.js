import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <h1>Weatherr App</h1>
          <input type="text" placeholder="Enter location..." />
          <button>Search</button>
        </div>
        <div className="top">
          <h1>Town</h1>
          <p>Temperature</p>
          <p>Cloudy or not</p>
          <p>Humidity</p>
        </div>
      </div>
    </div>
  );
}

export default App;
