import React from 'react';

function Resume() {
    return (
        <div>
            <button className="button" type="button" onClick={() => (window.open('https://docs.google.com/document/d/1rVf1gmdIXvjpj-WJUHTYX13eEFSMjKUUWPtUT93X92s/edit?usp=sharing', '_blank'))}>View My Resume</button>
        </div >
    )
}

export default Resume;
