import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Whiteboard from "./pages/Whiteboard";
import Survey from "./pages/Survey";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import Overview from "./pages/Overview";

import { AuthProvider } from "./context/context";


function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Router>

        <Switch>
          <Route exact path="/survey/:id">
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

      </Router>
    </AuthProvider>
  );
}

export default App;
