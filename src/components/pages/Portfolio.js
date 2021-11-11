import React, { useState } from 'react';
import Footer from '../Footer';

const Portfolio = () => {

    const [projects] = useState([
        {
            name: 'Run Buddy',
            category: 'portfolio',
            description: 'HTML, CSS',
            repository: 'https://github.com/rlw950/run-buddy',
            deployed: 'https://rlw950.github.io/photo-port/'
        },
        {
            name: 'Robot Gladiators',
            category: 'portfolio',
            description: 'HTML, CSS, JavaScript',
            repository: 'https://github.com/rlw950/robot-gladiators',
            deployed: 'https://rlw950.github.io/robot-gladiators/'
        },
        {
            name: 'Quiz Module',
            category: 'portfolio',
            description: 'HTML, CSS, JavaScript',
            repository: 'https://github.com/rlw950/Quiz-Module-3',
            deployed: 'https://rlw950.github.io/quiz-module-3/'
        },
        {
            name: 'Photo Port',
            category: 'portfolio',
            description: 'HTML, CSS, JavaScript, React',
            repository: 'https://github.com/rlw950/photo-port',
            deployed: 'https://rlw950.github.io/photo-port/'
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
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Portfolio;
