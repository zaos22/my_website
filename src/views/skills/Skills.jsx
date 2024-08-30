import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { RiFolderLockFill } from "react-icons/ri";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Typewriter from 'typewriter-effect';
import './Skills.css';

function Skills() {
    const navigate = useNavigate();

    const [showText1, setShowText1] = useState(false);
    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setShowText1(true), 500);
        const timer2 = setTimeout(() => setShowText2(true), 3000);
        const timer3 = setTimeout(() => setShowText3(true), 500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    let location = useLocation();
    useEffect(() => {
        gsap.fromTo(".content-load", { opacity: 0, x: 100, y: 0 }, { opacity: 1, x: 0, y: 0, delay: 0, duration: 2 });
        gsap.fromTo(".arrow-load", { opacity: 0, x: 100, y: 0 }, { opacity: 1, x: 0, y: 0, delay: 3.5 });
    }, [location]);

    const handleLinkClickNext = (e) => {
        e.preventDefault();
        gsap.to(".content-load", { opacity: 0, x: -100, y: 0, duration: 2 });
        gsap.to(".arrow-load", {
            opacity: 0, x: -100, y: 0, delay: 0.5, onComplete: () => {
                navigate("/education");
            }
        });
    };

    const handleLinkClickBack = (e) => {
        e.preventDefault();
        gsap.to(".content-load", { opacity: 0, x: 100, y: 0, duration: 2 });
        gsap.to(".arrow-load", {
            opacity: 0, x: -100, y: 0, delay: 0.5, onComplete: () => {
                navigate("/about-me");
            }
        });
    };

    return (
        <div className="skills">
            <div className="skills-align content-load">
                <div className='center-box-skills'>
                    <div className='top-bar-skills'>
                        <div className='dots-container'>
                            <div className='dot1 mt-2' />
                            <div className='dot2 mt-2 ms-1' />
                            <div className='dot3 mt-2 ms-1 me-3' />
                        </div>
                        <div className='window-top-bar'>
                            <p>
                                <RiFolderLockFill color="pink" /> skills -zsh —1001x301
                            </p>
                        </div>/
                    </div>
                    <div className="container px-2 mt-4 mb-4">
                        <div className="d-flex">
                            <div className={`console-text ${showText1 ? 'show-text' : ''}`}>
                                zaos@Zaos—MacBook—Air~%
                            </div>
                            <div className={`code-text ${showText3 ? 'show-code' : ''}`}>
                                <Typewriter
                                    options={{
                                        strings: ['ls skills', ""],
                                        autoStart: true,
                                        loop: false,
                                        pauseFor: 10000000,
                                        delay: 200,
                                        deleteSpeed: 1,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                WordPress
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                WP themes
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                PrestaShop
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                Vercel
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                AWS
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                Google API
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                Docker
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                Xampp
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                MySQL
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                MongoDB
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                SQLite
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                PostgressSQL
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                PHP
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                Javascript
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                Python
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                JSON
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                Bootstrap
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                Tailwind
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                React
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                Vue
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                Nodejs
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                Laravel
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                Flask
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                FastAPI
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                Figma
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                Git
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                Team Work
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                Notion
                            </div>
                            <div className={`result-text ${showText2 ? 'show-text' : ''}`}>
                                Scrum
                            </div>
                        </div>
                        <div className="pt-4 pb-2 d-flex justify-content-center">
                            <div className='arrow-load pe-5'>
                                <Link
                                    aria-label="Go back"
                                    to="/" onClick={handleLinkClickBack}>
                                    <MdOutlineArrowBackIosNew className='back-arrow next-arrow-bounce' />
                                </Link>
                            </div>
                            <div className='arrow-load'>
                                <Link
                                    aria-label="Go next"
                                    to="/skills" onClick={handleLinkClickNext}>
                                    <MdArrowForwardIos className='next-arrow next-arrow-bounce' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Skills;