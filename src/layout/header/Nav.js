import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/layout.css';

function Nav() {
    return (
        <nav>
            <ul>
                <li className="hide">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/my-work">My Work</Link>
                </li>
                <li>
                    <Link to="/about">About Me</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
