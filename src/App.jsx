import { BrowserRouter as Router } from "react-router-dom";
import RoutesFront from "./routes/routesFront";

const App = () => {
  return(
   <>
    <Router>
      <RoutesFront/> 
    </Router>
  </>
  )
}

export default App;
