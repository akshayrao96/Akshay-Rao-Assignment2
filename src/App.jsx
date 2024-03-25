import "./App.css";
import Grid from "./Grid";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Introduction from "./Introduction";
import Credits from "./Credits";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
          <li>
            <Link to="/credits">Credits</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/game" element={<Grid />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="*" element={<Introduction />} /> {/* Fallback Route */}
      </Routes>
    </Router>
  );
}

export default App;
