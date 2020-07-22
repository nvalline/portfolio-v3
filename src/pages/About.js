import React from 'react';

import AboutBio from '../components/AboutBio';
import AboutImage from '../components/AboutImage';
import Resume from '../components/Resume';

import '../styles/about.css';

function About() {
    return (
        <main className="container container-grid">
            <div className="left-col">
                <AboutBio />
            </div>
            <div className="right-col">
                <AboutImage />
                <Resume />
            </div>
        </main>
    )
}

export default About;
