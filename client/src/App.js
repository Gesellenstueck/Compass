import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Whiteboard from "./pages/Whiteboard";
import Survey from "./pages/Survey";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Overview from "./pages/Overview";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/survey/:id">
              <Survey />
            </Route>
            <Route exact path="/overview">
              <Overview />
            </Route>
            <Route exact path="/whiteboard">
              <Whiteboard />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
