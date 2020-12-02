import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Whiteboard from "./pages/Whiteboard";
import Survey from "./pages/Survey";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { I18nContext, localDicts } from "./contexts/i18n";
import LocalSelect from "./components/LocalSelect/LocalSelect";
import { useState } from "react";

function App() {
  const [dict, setDict] = useState(localDicts.de);
  return (
    <I18nContext.Provider value={{ dict, setDict }}>
      <GlobalStyles />
      <Router>
        <div className="App">
          {/* <ul>
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
          <Button size="large">Hallo</Button> */}
          <LocalSelect />
          <Switch>
            <Route exact path="/survey">
              <Survey />
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
    </I18nContext.Provider>
  );
}

export default App;
