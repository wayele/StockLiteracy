import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/LoginForm";
import Signup from "./components/SignupForm";
import NoMatch from "./pages/NoMatch";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Education from "./pages/Education";
import './App.css';

function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard user={user} />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path={["/", "/landing"]}>
            <Landing />
          </Route>
          <Route exact path="/learn">
            <Education />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
