import React from 'react';


function AboutImage() {
    const devices = '/img/devices1.jpg';

    return (
        <div className="img-block">
            <img src={devices} alt="computer devices" className="img-home" />
        </div>
    )
}

export default AboutImage;
