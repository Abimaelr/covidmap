import logo from './logo.svg';
import './App.css';

//api1 https://restcountries.eu/rest/v2/all -> Todos os países
//api2 https://disease.sh/docs/#/COVID-19%3A%20Apple/get_v3_covid_19_apple_countries__country_ -> covid Data

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
