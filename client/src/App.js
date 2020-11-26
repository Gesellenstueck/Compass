import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  //basic examples to test the Routing

  function Survey() {
    return <h2>Survey</h2>;
  }

  function Whiteboard() {
    return <h2>Whiteboard</h2>;
  }

  function Dashboard() {
    return <h2>Dashboard</h2>;
  }

  function Login() {
    return <h2>Login</h2>;
  }

  //end of examples

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
              <Link to="/survey">Survey</Link>
            </li>
            <li>
              <Link to="/whiteboard">Team Board</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/">Login Page</Link>
            </li>
          </ul>
          <a href="/storybook">To Storybook</a>
          <Button />
        </header>
        <Switch>
          <Route path="/survey">
            <Survey />
          </Route>
          <Route path="/whiteboard">
            <Whiteboard />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
