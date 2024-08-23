import React, { useEffect } from "react";
import gsap from "gsap";
import { useLocation, Link } from "react-router-dom";
import { gsapLoader } from '../../components/gsapLoader';
import { FcNext } from "react-icons/fc";
import defaultIconLg from '../../img/default-profile-icon-lg.png';
import defaultIconSm from '../../img/default-profile-icon-sm.png';
import ProgressLine from '../../components/ProgressLine';
import Typewriter from 'typewriter-effect';
import './Home.css';

function Home() {
    const url = 'https://zaos-website.com/';

    let location = useLocation();
    useEffect(() => {
        gsap.fromTo(".title-load", { opacity: 0, x: 100, y: 0}, { opacity: 1, x: 0, y: 0, duration: 1});
        gsap.fromTo(".subtitle-load", { opacity: 0, x: 100, y: 0}, { opacity: 1, x: 0, y: 0, duration: 1.5});
        gsap.fromTo(".img-load", { opacity: 0, x: 0, y: 100 }, { opacity: 1, x: 0, y: 0, duration: 0.5 });
        gsap.fromTo(".arrow-load", { opacity: 0, x: 100, y: 0, delay: 0}, { opacity: 1, x: 0, y: 0, delay: 3});
    }, [location]);

    return (
        <div className="home">
            <div className='center-box'>
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
                                    <div className='image-icon'>
                                        <div className="img-load">
                                            <img className="image-lg" src={defaultIconLg} alt="Default Icon" />
                                            <img className="image-sm" src={defaultIconSm} alt="Default Icon" />
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <h6 className='progress-text'>Let's start!</h6>
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
                        <div className="col-12 col-md-8 top-info">
                            <div className="info-container">
                                <div className=''>
                                    <div className='meta-info-align text-center'>
                                        <p className='title-lg text-center fw-bold title-load'>
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
                                    to="/about-me"
                                    onLoad={gsapLoader}>
                                    <FcNext className='next-arrow next-arrow-bounce' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;