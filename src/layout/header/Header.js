import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav.js';

import '../../styles/layout.css';

function Header() {
    return (
        <header>
            <div id="logoDiv">
                <h2>
                    <Link to={process.env.PUBLIC_URL + "/"}>Nate Valline</Link>
                </h2>
            </div>
            <div id="navDiv">
                <Nav />
            </div>
        </header>
    )
}

export default Header;
