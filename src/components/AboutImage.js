import React from 'react';

import devices from '../img/devices1.jpg';

function AboutImage() {
    return (
        <div className="img-block about-img-block">
            <img src={devices} alt="computer devices" className="img-about" />
        </div>
    )
}

export default AboutImage;
