import React from "react";
import Header from "./components/Header/Header";
import Question from "./components/Add-Question/Question";
import ViewQuestion from './components/ViewQuestion'
import "./App.css";

// Implementing React router dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//Importing components
import StackOverflow  from "./components/StackOverflow";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={StackOverflow} />
          <Route exact path = "/add-question" component={Question} />
          <Route exact path = "/question" component={ViewQuestion} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
