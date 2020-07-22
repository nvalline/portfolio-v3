import React from 'react';


function AboutImage() {
    const devices = '/img/devices1.jpg';

    return (
        <div className="img-block about-img-block">
            <img src={devices} alt="computer devices" className="img-about" />
        </div>
    )
}

export default AboutImage;
