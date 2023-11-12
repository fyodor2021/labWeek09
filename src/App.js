import logo from './logo.svg';
import './App.css';
import Headers from "./components/Headers"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <div>
        <Headers text="Welcome to FullStack Development - I" tag="h2"/>
        <Headers text="React JS Programming Week09 Lab exercise" tag="h3"/>
        <Headers text="Student ID: 101388514" tag="h4"/>
        <Headers text="Name: Vedoor Barakat" tag="h5"/>
        <Headers text="George Brown College, Toronto" tag="h6"/>
        </div>
      </header>
    </div>
  );
}

export default App;
