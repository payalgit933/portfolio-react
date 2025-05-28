import React from "react";
import Header from './Header';
import { FaGithub } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';

function Profile() {
    return (
        <div id="profile" style={{
            backgroundImage: "url('/bg.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "722px",
        }}>
            <Header />
            <div className="self">
                <h1 className="intro font-bold text-5xl text-blue-1000">
                    <Typewriter
                        words={["Hi, I'm Payal"]}
                        loop={false}
                        cursor
                        cursorStyle="_"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </h1>

                <h3 className="m-3 font-bold text-xl text-blue-700">Full-Stack Developer</h3>
                <p className="text-lg">
                    I’m a passionate Full-Stack Developer skilled in building responsive web applications using <br />
                    modern technologies like React, Djnago, Python with a strong focus on clean code,<br />
                    performance, and user experience.
                </p>
            </div>

            <div className="button absolute ">
                <a href="#contact"><button className="cursor-pointer button1 m-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded transition transform hover:scale-130 duration-300">Hire Me</button></a>
                <button className="cursor-pointer button1 m-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded transition transform hover:scale-130 duration-300">Let's Talk</button>
            </div>

            <div className="links absolute">
                <a href="https://github.com/payalgit933" target="_blank">
                    <FaGithub size={40} className="text-black hover:text-gray-1000 transition transform hover:scale-180 duration-300" />
                </a>
            </div>
        </div>
    );
}

export default Profile;
