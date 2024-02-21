import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure you create a corresponding CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
