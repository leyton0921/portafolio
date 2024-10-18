import React from 'react';
import CardProject from '@/components/projectsinformation/projectsinformation';
import ProjectText from '@/components/projectext/projecttext';

export default function Projects() {
    const projects = [
        {
            name: "Portafolio",
            imageUrl: "/images/portafolio.png",
            liveUrl: "https://portafolio-isabella-leyton.vercel.app/about",
            githubUrl: "https://github.com/leyton0921/portafolio"
        }

    ];

    return (
        <div>

            <ProjectText>
                {projects.map((project, index) => (
                    <CardProject
                        key={index}
                        name={project.name}
                        imageUrl={project.imageUrl}
                        liveUrl={project.liveUrl}
                        githubUrl={project.githubUrl}
                    />

                ))}
            </ProjectText>

        </div>
    )
}
