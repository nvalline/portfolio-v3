import React from 'react';

import homeImage from '../img/profile-image.png';

import '../styles/home.css';

function HomeImage() {
    return (
        <div className="img-block">
            <img src={homeImage} alt="profile graphic" className="img-home" />
        </div>
    )
}

export default HomeImage;
