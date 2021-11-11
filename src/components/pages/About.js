import React from 'react';
import avatarIcon from "../../assets/icon/avatar-icon.png"
import Footer from '../Footer';

const About = () => {
    return (
        <section className="my-5">
            
            <h1 id="about">About Me</h1>
            <br></br>
            <img src={avatarIcon} className="my-2" style={{ width: "10%" }} alt="cover" />
            <br></br>
            <div className="my-2">
                <p>
                    I am enrolled as a student of BOOTCAMP: UCB-VIRT-BO-FSF-PT-06-2021-U-B-MW that is offered by UC Berkeley Extension.
                </p>
                <p>
                    I enjoy learning new languages and applications.
                </p>
            </div>
            <Footer></Footer>
        </section>
    );
}

export default About;