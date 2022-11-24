import "./App.css";
import { Route, Switch } from "react-router-dom";
import PageTwo from "./PageTwo";
import PageOne from "./PageOne";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/">
          <PageOne />
        </Route>

        <Route exact path="/">
          <PageTwo />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
