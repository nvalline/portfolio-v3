import React from 'react';
import { useHistory } from 'react-router-dom';

function Tagline() {
    const history = useHistory();
    const goMyWork = () => history.push('my-work');

    return (
        <div>
            <div>
                <h1 style={{ lineHeight: "1.5em" }}>Developing Your Projects <br /> For Modern Times</h1>
                <button type="button" onClick={goMyWork}>See My Work</button>
            </div>
            <div>
                Video Component
            </div>
        </div>
    )
}

export default Tagline;
