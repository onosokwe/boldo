import { BrowserRouter as Router, Route } from "react-router-dom";

// load components
import HomeLanding from "./components/home/HomeLanding";

import "./App.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "react-multi-carousel/lib/styles.css";

function App() {
  return (
    <Router>
      <Route exact path={"/"} component={HomeLanding}></Route>
    </Router>
  );
}

export default App;
