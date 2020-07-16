import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav.js';

import '../layout.css';

function Header() {
    return (
        <header>
            <div>
                <h2>
                    <Link to="/">Nate Valline</Link>
                </h2>
            </div>
            <div id="navDiv">
                <Nav />
            </div>
        </header>
    )
}

export default Header;
