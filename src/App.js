import { Link } from "react-router-dom";
import Routes from "./router/Routes";


function App () {
  return (
    <div>
      <Link to="/posts"> posts </Link>
      <Link to="/poststwo"> poststwo </Link>
      <Link to="/todos"> todos </Link>
      <Routes />
    </div>
  );
}

export default App;
