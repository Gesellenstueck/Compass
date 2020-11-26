import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <ul>
            <li>
              <Link to="/Survey">Survey</Link>
            </li>
            <li>
              <Link to="/Whiteboard">Team Board</Link>
            </li>
            <li>
              <Link to="/Dashboard">Survey</Link>
            </li>
            <li>
              <Link to="/">Login Page</Link>
            </li>
          </ul>
          <a href="/storybook">To Storybook</a>
          <Button />
        </header>
      </div>
    </Router>
  );
}

export default App;
