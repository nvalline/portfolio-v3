import React from 'react';

import '../styles/work.css';

function ProjectCard({ title, description, link, repoLink, image }) {
    return (
        <div className="project-card">
            <div className="project-img">
                <img src={image} alt="project" />
            </div>
            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="project-btns">
                <button type="button" className="card-btn link-btn" onClick={() => (window.open(link, '_blank'))}>
                    View Site
                </button>
                <button type="button" className="card-btn repo-btn" onClick={() => (window.open(repoLink, '_blank'))}>
                    View Code
                </button>
            </div>
        </div>
    )
}

export default ProjectCard;
