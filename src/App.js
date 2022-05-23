import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.js"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import LinkedIn from './graphics/linkedin.png'
import GitHub from './graphics/github.png'

function App() {
  return (
    <div className="main-display">
      <Router>
        <ul className="header">
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
        </ul>
        <div className="main-content">
          <Routes>
            <Route path="/react-portfolio" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </Router>
      <div className="footer">
        <a href="https://github.com/rabrigo">
          <img className="footer-icons" src={LinkedIn}></img>
        </a>
        <a href="https://www.linkedin.com/in/ronnel-abrigo">
          <img className="footer-icons" src={GitHub}></img>
        </a>
      </div>
    </div>
  );
}

export default App;
