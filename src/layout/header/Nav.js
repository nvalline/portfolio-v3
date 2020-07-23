import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/layout.css';

function Nav() {
    return (
        <nav>
            <ul>
                <li className="hide">
                    <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
                </li>
                <li>
                    <Link to={process.env.PUBLIC_URL + "/my-work"}>My Work</Link>
                </li>
                <li>
                    <Link to={process.env.PUBLIC_URL + "/about"}>About Me</Link>
                </li>
                <li>
                    <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
