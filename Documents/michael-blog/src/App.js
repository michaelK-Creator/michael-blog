// import logo from './logo.svg';
import './App.css';
import Home from './home';



function App() {
  const title = 'Welcome to Michael\s new blog';
  



  return (
    <div className="App">
      <h1> { title }</h1>
      {/* <header className="App-header">
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
      </header> */}
      <p> This is my first react App</p>
    </div>
  );
}

export default App;
