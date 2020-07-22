import React from 'react';
import { useHistory } from 'react-router-dom';

import homeImage from '../img/profile-image.png';

function Tagline() {
    const history = useHistory();
    const goMyWork = () => history.push('my-work');

    return (
        <div className="main-content">
            <div className="tag-block">
                <h1>Developing Your Projects For Modern Times</h1>
                <button className="button" type="button" onClick={goMyWork}>View My Work</button>
            </div>
            <div className="img-block">
                <img src={homeImage} alt="devices" className="img-home" />
            </div>
        </div>
    )
}

export default Tagline;
