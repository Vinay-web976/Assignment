import { Switch, Route } from "react-router-dom";
import Resources from "./component/Resources";
import Resource from "./component/Resource";
import "./App.css";

function App() {
  return (
    <main className="App">
      <Switch>
        <Route path="/resources/:id" component={Resource} />
        <Route path="/resources" component={Resources} />
        <Route path="/" component={Resources} />
      </Switch>
    </main>
  );
}

export default App;
