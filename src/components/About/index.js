import React from 'react';
import avatarIcon from "../../assets/icon/avatar-icon.jpg"

function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <br></br>
            <img src={avatarIcon} className="my-2" style={{ width: "10%" }} alt="cover" />
            <br></br>
            <div className="my-2">
            <p>
                butcher selfies chambray shabby chic gentrify readymade yr Echo Park XOXO Tumblr normcore Banksy direct trade Blue Bottle chillwave you probably haven't heard of them single-origin coffee Vice fanny pack fixie Odd Future Austin fingerstache pickled twee synth Wes Anderson Thundercats viral bitters flannel meggings narwhal Marfa Schlitz sustainable Intelligentsia umami deep v craft
            </p>
            <p>
                butcher selfies chambray shabby chic gentrify readymade yr Echo Park XOXO Tumblr normcore Banksy direct trade Blue Bottle chillwave you probably haven't heard of them single-origin coffee Vice fanny pack fixie Odd Future Austin fingerstache pickled twee synth Wes Anderson Thundercats viral bitters flannel meggings narwhal Marfa Schlitz sustainable Intelligentsia umami deep v craft
            </p>
            </div>
        </section>

    );
}

export default About;