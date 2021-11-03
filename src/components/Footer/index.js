import React from 'react';
import githubDark from "../../assets/icon/github-dark.png"
import linkeden from "../../assets/icon/linkeden.png"

function Footer() {
    return (
        <section>
            <a href="https://github.com/rlw950">
                <img src={githubDark} className="my-2" style={{ width: "10%" }} alt="cover" />
            </a>
            <img src={linkeden} className="my-2" style={{ width: "6%" }} alt="cover" />
        </section>
    );
}
export default Footer;