import React, { useState } from 'react';

const Portfolio = () => {

    const [projects] = useState([
        {
            name: 'Run Buddy',
            category: 'portfolio',
            description: 'HTML, CSS',
            repository: 'https://github.com/rlw950/run-buddy'
        },
        {
            name: 'Robot Gladiators',
            category: 'portfolio',
            description: 'HTML, CSS, JavaScript',
            repository: 'https://github.com/rlw950/robot-gladiators'
        },
        {
            name: 'Quiz Module',
            category: 'portfolio',
            description: 'HTML, CSS, JavaScript',
            repository: 'https://github.com/rlw950/Quiz-Module-3'
        },
        {
            name: 'Photo Port',
            category: 'portfolio',
            description: 'HTML, CSS, JavaScript, React',
            repository: 'https://github.com/rlw950/photo-port'
        }
    ]);

    const currentProjects = projects.filter((project) => project.category);

    return (
        <div>Portfolio
            <div className="flex-row">
                {currentProjects.map((image, i) => (
                    <img
                        src={require(`../../assets/large/portfolio/${i}.jpg`).default}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
