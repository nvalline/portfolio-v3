import React from 'react';

import ProjectCard from './ProjectCard';
import ProjectData from '../util/projectData.json';

function ProjectContainer() {
    const data = ProjectData.sort((a, b) => (a.id < b.id) ? 1 : -1);

    return (
        <div className="project-container">
            <h2>Some Of My Work</h2>
            <div className="project-block">
                {data.map(project => {
                    return (
                        <ProjectCard
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            repoLink={project.repoLink}
                            image={project.img}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectContainer;
