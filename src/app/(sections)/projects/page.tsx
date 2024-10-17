import React from 'react';
import CardProject from '@/components/projectsinformation/projectsinformation';
import ProjectText from '@/components/projectext/projecttext';

export default function Projects() {
    const projects = [
        {
            name: "Urgencias Ya",
            imageUrl: "/images/avatar1.png",
            liveUrl: "https://urgenciasya-frontend-3.onrender.com/",
            githubUrl: "https://github.com/sebas1913/UrgenciasYa-Frontend"
        },
        {
            name: "Urgencias Ya",
            imageUrl: "/images/avatar1.png",
            liveUrl: "https://urgenciasya-frontend-3.onrender.com/",
            githubUrl: "https://github.com/sebas1913/UrgenciasYa-Frontend"
        },
        {
            name: "Urgencias Ya",
            imageUrl: "/images/avatar1.png",
            liveUrl: "https://urgenciasya-frontend-3.onrender.com/",
            githubUrl: "https://github.com/sebas1913/UrgenciasYa-Frontend"
        },
        {
            name: "Urgencias Ya",
            imageUrl: "/images/avatar1.png",
            liveUrl: "https://urgenciasya-frontend-3.onrender.com/",
            githubUrl: "https://github.com/sebas1913/UrgenciasYa-Frontend"
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
