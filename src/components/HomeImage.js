import React from 'react';


import '../styles/home.css';

function HomeImage() {
    const homeImage = '/img/profile-image.png';

    return (
        <div className="img-block">
            <img src={homeImage} alt="profile graphic" className="img-home" />
        </div>
    )
}

export default HomeImage;
