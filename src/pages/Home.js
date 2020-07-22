import React from 'react';

import Tagline from '../components/Tagline';
import HomeImage from '../components/HomeImage';

import '../styles/home.css';

function Home() {
    return (
        <main className="container container-grid">
            <div className="left-col">
                <Tagline />
            </div>
            <div className="right-col">
                <HomeImage />
            </div>
        </main>
    )
}

export default Home;
