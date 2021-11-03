import React from 'react';
import Footer from '../Footer';

const Resume = () => {
    return (
        <section className="my-5">
            <h1 id="about">Resume</h1>
            <br></br>
            <span href=''>
                Download my Resume
            </span>
            <div>
            <br></br>
                <span>Front-end Proficenies</span>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>Back-end Proficenies
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
            <Footer></Footer>
        </section>
    );
}

export default Resume;