import React from 'react';
import Nav from './Nav.js';

import './Header.css';

function Header() {
    return (
        <header>
            <div>
                <h2>
                    Nate Valline
                </h2>
            </div>
            <div id="navDiv">
                <Nav />
            </div>
        </header>
    )
}

export default Header;
