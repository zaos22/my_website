import React, { useEffect } from "react";
import gsap from "gsap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import defaultIconLg from '../../img/profile-icon-lg.png';
import defaultIconSm from '../../img/profile-icon-sm.png';
import Typewriter from 'typewriter-effect';
import './AboutMe.css';
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import ProgressLine from '../../components/ProgressLine';

function AboutMe() {
    const url = 'https://zaos-website.com/about-me';
    const navigate = useNavigate();

    let location = useLocation();
    useEffect(() => {
        gsap.fromTo(".text-load", { opacity: 0, x: -100, y: 0 }, { opacity: 1, x: 0, y: 0, duration: 1 });
        gsap.fromTo(".img-load", { opacity: 0, x: 0, y: 100 }, { opacity: 1, x: 0, y: 0, delay: 0.5, duration: 1 });
        gsap.fromTo(".content-load", { opacity: 0, x: 100, y: 0 }, { opacity: 1, x: 0, y: 0, delay: 0, duration: 2 });
        gsap.fromTo(".arrow-load", { opacity: 0, x: 100, y: 0 }, { opacity: 1, x: 0, y: 0, delay: 5 });
        gsap.fromTo(".progress-load", { opacity: 0, x: 0, y: 50 }, { opacity: 1, x: 0, y: 0, duration: 1 });
        gsap.fromTo(".label-bar-load", { opacity: 0, x: 0, y: -20 }, { opacity: 1, x: 0, y: 0, duration: 1 });
    }, [location]);

    const handleLinkClickNext = (e) => {
        e.preventDefault();
        gsap.to(".text-load", { opacity: 0, x: -100, y: 0, duration: 1 });
        gsap.to(".progress-load", { opacity: 0, x: 0, y: 50, duration: 1 });
        gsap.to(".label-bar-load", { opacity: 0, x: 0, y: -20, duration: 1.5 });
        gsap.to(".img-load", { opacity: 0, x: 0, y: 100, duration: 0.5 });
        gsap.to(".content-load", { opacity: 0, x: -100, y: 0, duration: 2 });
        gsap.to(".arrow-load", {
            opacity: 0, x: -100, y: 0, delay: 0.5, onComplete: () => {
                navigate("/skills");
            }
        });
    };

    const handleLinkClickBack = (e) => {
        e.preventDefault();
        gsap.to(".text-load", { opacity: 0, x: -100, y: 0, duration: 1 });
        gsap.to(".progress-load", { opacity: 0, x: 0, y: 50, duration: 1 });
        gsap.to(".label-bar-load", { opacity: 0, x: 0, y: -20, duration: 1.5 });
        gsap.to(".img-load", { opacity: 0, x: 0, y: 100, duration: 0.5 });
        gsap.to(".content-load", { opacity: 0, x: 100, y: 0, duration: 2 });
        gsap.to(".arrow-load", {
            opacity: 0, x: -100, y: 0, delay: 0.5, onComplete: () => {
                navigate("/");
            }
        });
    };


    return (
        <div className="about-me">
            <div className="about-me-align content-load">
                <div className='center-box-about-me'>
                    <div className='top-bar'>
                        <div className='dots-container'>
                            <div className='dot1 mt-2' />
                            <div className='dot2 mt-2 ms-1' />
                            <div className='dot3 mt-2 ms-1 me-3' />
                        </div>
                        <input
                            aria-label="Page link"
                            className='input-top-bar-sm'
                            type="text"
                            defaultValue={url}
                            disabled={true}
                        />
                        <input
                            aria-label="Page link"
                            className='input-top-bar-lg'
                            type="text"
                            defaultValue={url}
                            disabled={true}
                        />
                    </div>
                    <div className="container px-4 mt-4 mb-4">
                        <div className="row g-0">
                            <div className="col-12 col-md-4">
                                <div className="p-3">
                                    <div className='image-icon-container'>
                                        <div className='image-icon image-background-about-me'>
                                            <div className="img-load">
                                                <img className="image-lg" src={defaultIconLg} alt="Default Icon" />
                                                <img className="image-sm" src={defaultIconSm} alt="Default Icon" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <div className="label-bar-load">
                                            <h6 className='progress-text'>About me!</h6>
                                        </div>
                                        <div className="progress-load">
                                            <ProgressLine
                                                backgroundColor="lightblue"
                                                visualParts={[
                                                    {
                                                        percentage: "20%",
                                                        color: "indianred"
                                                    }
                                                ]}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-8 top-info text-load">
                                <div className='quote-left'>
                                    <ImQuotesLeft color='black' size={25} />
                                </div>
                                <div className="info-container">
                                    <div className=''>
                                        <div className='info-align-about-me fw-bold'>
                                            <div className='pt-1 meta-info-about-me'>
                                                <Typewriter
                                                    options={{
                                                        strings: ['I am Oussama Zazou Abid, also known as "Zaos." I am a committed and enthusiastic individual, eager to learn and contribute in dynamic environments. Through various internships, I have gained programming experience and developed skills in multiple programming languages. I bring value to the team with my technical expertise, dedication, and adaptability to diverse projects and challenges.', ""],
                                                        autoStart: true,
                                                        loop: false,
                                                        pauseFor: 10000000,
                                                        delay: 10,
                                                        deleteSpeed: 1,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='quote-right text-end'>
                                    <ImQuotesRight color='black' size={25} />
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
                </div>
            </div>
        </div>
    );
}

export default AboutMe;