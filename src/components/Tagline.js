import React from 'react';
import { useHistory } from 'react-router-dom';

function Tagline() {
    const history = useHistory();
    const goMyWork = () => history.push('my-work');

    return (
        <div className="tag-block">
            <h1>Developing Your Projects For Modern Times</h1>
            <button className="button" type="button" onClick={goMyWork}>View My Work</button>
        </div>
    )
}

export default Tagline;
