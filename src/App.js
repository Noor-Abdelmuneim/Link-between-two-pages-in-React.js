import './App.css';
import Homepage from "./Homepage";
import Aboutpage from "./Aboutpage";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div> 
	  <nav>
      <Link to="/" className="nav-item">Homepage</Link>
      <Link to="/about-page" className="nav-item">Aboutpage</Link>
	  </nav>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/contact" element={<Aboutpage />}></Route>
      </Routes>
    </div>
  );
};

export default App;

