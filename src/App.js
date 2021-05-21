import "./App.css";
import ClassCard from "./components/ClassCard";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <LogIn component={LogIn} />
        </Route>
        <Route exact path="/signup">
          <SignUp component={SignUp} />
        </Route>
        <Route exact path="/card">
          <ClassCard component={ClassCard} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
