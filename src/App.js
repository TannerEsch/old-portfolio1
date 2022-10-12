import logo from './logo.svg';
import About from './About';
import broilan from "./broilan.webp";
import './App.css';
import Projects from './Projects';
import Blog from './Blog';
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/About" element={< About />} />
        <Route path="/Blog" element={< Blog />} />
        <Route path="/Projects" element={< Projects />} />
        <Route path="/" element={< Home />} />
      </Routes>
      <div class = "linkContainer">
        <header class = "header">
        <Link to="/" className ="Home">Home</Link>
        <Link to="/Blog" className ="Blog">Blog</Link>
        <Link to="/about" className ="About">About</Link>
        <Link to="/Projects" className ="Projects">Projects</Link>
        </header>
        </div>
        <div>
        <style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
</style>
        <img src={broilan} className = "broilan"/>
        </div>
    </Router>
  );
}

export default App;
