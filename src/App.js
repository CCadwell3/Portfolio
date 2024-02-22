import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import ProjectsList from './Components/ProjectsList';
import ProjectDetail from './Components/ProjectDetail';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Projects" element={<ProjectsList />} />
                <Route path="/projects/:projectId" element={<ProjectDetail />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;