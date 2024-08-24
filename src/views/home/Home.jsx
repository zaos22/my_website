import React, { useEffect } from "react";
import gsap from "gsap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import defaultIconLg from '../../img/default-profile-icon-lg.png';
import defaultIconSm from '../../img/default-profile-icon-sm.png';
import ProgressLine from '../../components/ProgressLine';
import Typewriter from 'typewriter-effect';
import './Home.css';

function Home() {
    const url = 'https://zaos-website.com/';
    const navigate = useNavigate();

    let location = useLocation();
    useEffect(() => {
        gsap.fromTo(".title-load", { opacity: 0, x: 100, y: 0 }, { opacity: 1, x: 0, y: 0, duration: 1 });
        gsap.fromTo(".subtitle-load", { opacity: 0, x: 100, y: 0 }, { opacity: 1, x: 0, y: 0, duration: 1.5 });
        gsap.fromTo(".img-load", { opacity: 0, x: 0, y: 100 }, { opacity: 1, x: 0, y: 0, duration: 0.5 });
        gsap.fromTo(".arrow-load", { opacity: 0, x: 100, y: 0 }, { opacity: 1, x: 0, y: 0, delay: 3 });
        gsap.fromTo(".progress-load", { opacity: 0, x: 0, y: 50 }, { opacity: 1, x: 0, y: 0, duration: 1 });
        gsap.fromTo(".label-bar-load", { opacity: 0, x: 0, y: -20 }, { opacity: 1, x: 0, y: 0, duration: 1 });
    }, [location]);

    const handleLinkClick = (e) => {
        e.preventDefault();
        gsap.to(".title-load", { opacity: 0, x: -100, y: 0, duration: 1 });
        gsap.to(".progress-load", { opacity: 0, x: 0, y: 50, duration: 1 });
        gsap.to(".label-bar-load", { opacity: 0, x: 0, y: -20, duration: 1.5 });
        gsap.to(".subtitle-load", { opacity: 0, x: -100, y: 0, duration: 1.5 });
        gsap.to(".img-load", { opacity: 0, x: 0, y: 100, duration: 0.5 });
        gsap.to(".content-load", { opacity: 0, x: -100, y: 0, duration: 2 });
        gsap.to(".arrow-load", {
            opacity: 0, x: -100, y: 0, delay: 0.5, onComplete: () => {
                navigate("/about-me");
            }
        });
    };

    return (
        <div className="home">
            <div className="home-align content-load">
                <div className='center-box-home'>
                    <div className='top-bar'>
                        <div className='dots-container'>
                            <div className='dot1 mt-2' />
                            <div className='dot2 mt-2 ms-1' />
                            <div className='dot3 mt-2 ms-1 me-3' />
                        </div>
                        <input
                            className='input-top-bar-sm'
                            type="text"
                            defaultValue={url}
                            disabled={true}
                        />
                        <input
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
                                        <div className='image-icon image-background-home'>
                                            <div className="img-load">
                                                <img className="image-lg" src={defaultIconLg} alt="Default Icon" />
                                                <img className="image-sm" src={defaultIconSm} alt="Default Icon" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <div className="label-bar-load">
                                            <h6 className='progress-text'>Let's start!</h6>
                                        </div>
                                        <div className="progress-load">
                                            <ProgressLine
                                                backgroundColor="lightblue"
                                                visualParts={[
                                                    {
                                                        percentage: "5%",
                                                        color: "indianred"
                                                    }
                                                ]}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-8 top-info">
                                <div className="info-container">
                                    <div className=''>
                                        <div className='info-align-home text-center'>
                                            <p className='pt-5 title-lg text-center fw-bold title-load'>
                                                {Array.from("Welcome to my web page!").map((char, index) => (
                                                    <span
                                                        key={index}
                                                        className={`bounce-letter letter-${index}`}
                                                        style={{ "--animation-order": index }}
                                                    >
                                                        {char === " " ? "\u00A0" : char}
                                                    </span>
                                                ))}
                                            </p>
                                            <p className='title-sm text-center fw-bold title-load'>
                                                {Array.from("Welcome!").map((char, index) => (
                                                    <span
                                                        key={index}
                                                        className={`bounce-letter letter-${index}`}
                                                        style={{ "--animation-order": index }}
                                                    >
                                                        {char === " " ? "\u00A0" : char}
                                                    </span>
                                                ))}
                                            </p>
                                            <div className="subtitle subtitle-load">
                                                <Typewriter
                                                    options={{
                                                        strings: ["Full Stack Developer", "Portfolio by Zaos"],
                                                        autoStart: true,
                                                        loop: true,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-4 pb-2 text-center arrow-load'>
                                    <Link
                                        to="/about-me" onClick={handleLinkClick}>
                                        <MdArrowForwardIos className='next-arrow next-arrow-bounce' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;