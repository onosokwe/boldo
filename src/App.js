import { BrowserRouter as Router, Route } from "react-router-dom";

// load components
import HomeLanding from "./components/index";

function App() {
  return (
    <Router>
      <Route exact path={"/"} component={HomeLanding}></Route>
    </Router>
  );
}

export default App;
