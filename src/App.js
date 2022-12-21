import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import Skills from './components/Skills';
import NavbarVertical from './components/NavbarVertical';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { Route, Switch, Redirect, BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
    <Router> 
      <NavbarVertical/>
      <Routes>
        <Route path="/" src="https://i.imgur.com/kAwto4t.jpg"  element={< Home />} />
        <Route path="/About" element={< About />} />        
        <Route path="/Contact" element={< Contact />} />
        <Route path="/projects" element={< Projects />} />
        <Route path="/Skills" element={< Skills />} />
        <Route path="/" element={< Home />} />
        </Routes>
        <div>
        
        </div>
    </Router>
    </div>
  );
}

export default App;
