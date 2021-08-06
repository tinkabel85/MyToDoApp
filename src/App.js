import logo from './logo.svg';
import './App.css';

const name = 'Oksana'
const password = false;
const age = 35;
const currentYear = 2021;
const yearOfBirth =1985;
const human = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: '#61DAFB',
          fontSize: 22 + 4,
          margin: 5
        }}>
        Hello, {name}!
        </p>
        <p>
          {password? 'Your password is correct' : 'Your password is wrong'}
          {true}
          {null}
          {undefined}
          {false}
          </p>
        <p>
          {human && 'Is human'}
        </p>
        <p>
        Age is  {age} years. Let's prove it: {currentYear} - {yearOfBirth} =
        {currentYear - yearOfBirth}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={{
          color: '#fff',
          paddingTop: 20,
          fontSize: 24,
          whiteSpace: 'pre-line'
        }}>
        Here will be a new ToDo Application. In {5} weeks. {'\n'}
         {3+1} % are done already.</div>
      </header>
    </div>
  );
}

export default App;
