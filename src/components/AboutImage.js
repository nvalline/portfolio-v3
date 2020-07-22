import React from 'react';

import devices from '../img/devices1.jpg';

function AboutImage() {
    return (
        <div className="img-block">
            <img src={devices} alt="computer devices" className="img-home" />
        </div>
    )
}

export default AboutImage;
