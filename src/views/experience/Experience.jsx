import React, { useEffect } from "react";
import gsap from "gsap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import defaultIconLg from '../../img/default-profile-icon-lg.png';
import defaultIconSm from '../../img/default-profile-icon-sm.png';
import './Experience.css';
import ProgressLine from '../../components/ProgressLine';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

function Experience() {
    const url = 'https://zaos-website.com/experience';
    const navigate = useNavigate();

    let location = useLocation();
    useEffect(() => {
        gsap.fromTo(".exp1-load", { opacity: 0, x: -100, y: 0 }, { opacity: 1, x: 0, y: 0, duration: 0.5 });
        gsap.fromTo(".exp2-load", { opacity: 0, x: 100, y: 0 }, { opacity: 1, x: 0, y: 0, duration: 1 });
        gsap.fromTo(".exp3-load", { opacity: 0, x: -100, y: 0 }, { opacity: 1, x: 0, y: 0, duration: 1.5 });
        gsap.fromTo(".exp4-load", { opacity: 0, x: 100, y: 0 }, { opacity: 1, x: 0, y: 0, duration: 2 });
        gsap.fromTo(".exp5-load", { opacity: 0, x: 0, y: -100 }, { opacity: 1, x: 0, y: 0, duration: 2.5 });
        gsap.fromTo(".img-load", { opacity: 0, x: 0, y: 100 }, { opacity: 1, x: 0, y: 0, delay: 0.5, duration: 1 });
        gsap.fromTo(".content-load", { opacity: 0, x: 100, y: 0 }, { opacity: 1, x: 0, y: 0, delay: 0, duration: 2 });
        gsap.fromTo(".arrow-load", { opacity: 0, x: 100, y: 0 }, { opacity: 1, x: 0, y: 0, delay: 3.5 });
        gsap.fromTo(".progress-load", { opacity: 0, x: 0, y: 50 }, { opacity: 1, x: 0, y: 0, duration: 1 });
        gsap.fromTo(".label-bar-load", { opacity: 0, x: 0, y: -20 }, { opacity: 1, x: 0, y: 0, duration: 1 });
    }, [location]);

    const handleLinkClickNext = (e) => {
        e.preventDefault();
        gsap.to(".exp1-load", { opacity: 0, x: -100, y: 0, duration: 0.5 });
        gsap.to(".exp2-load", { opacity: 0, x: 100, y: 0, duration: 1 });
        gsap.to(".exp3-load", { opacity: 0, x: -100, y: 0, duration: 1.5 });
        gsap.to(".exp4-load", { opacity: 0, x: 100, y: 0, duration: 2 });
        gsap.to(".exp5-load", { opacity: 0, x: 0, y: 100, duration: 2.5 });
        gsap.to(".progress-load", { opacity: 0, x: 0, y: 50, duration: 1 });
        gsap.to(".label-bar-load", { opacity: 0, x: 0, y: -20, duration: 1.5 });
        gsap.to(".img-load", { opacity: 0, x: 0, y: 100, duration: 0.5 });
        gsap.to(".content-load", { opacity: 0, x: -100, y: 0, duration: 2 });
        gsap.to(".arrow-load", {
            opacity: 0, x: -100, y: 0, delay: 0.5, onComplete: () => {
                navigate("/projects");
            }
        });
    };

    const handleLinkClickBack = (e) => {
        e.preventDefault();
        gsap.to(".exp1-load", { opacity: 0, x: -100, y: 0, duration: 0.5 });
        gsap.to(".exp2-load", { opacity: 0, x: 100, y: 0, duration: 1 });
        gsap.to(".exp3-load", { opacity: 0, x: -100, y: 0, duration: 1.5 });
        gsap.to(".exp4-load", { opacity: 0, x: 100, y: 0, duration: 2 });
        gsap.to(".exp5-load", { opacity: 0, x: 0, y: 100, duration: 2.5 });
        gsap.to(".progress-load", { opacity: 0, x: 0, y: 50, duration: 1 });
        gsap.to(".label-bar-load", { opacity: 0, x: 0, y: -20, duration: 1.5 });
        gsap.to(".img-load", { opacity: 0, x: 0, y: 100, duration: 0.5 });
        gsap.to(".content-load", { opacity: 0, x: 100, y: 0, duration: 2 });
        gsap.to(".arrow-load", {
            opacity: 0, x: -100, y: 0, delay: 0.5, onComplete: () => {
                navigate("/education");
            }
        });
    };


    return (
        <div className="experience">
            <div className="experience-align content-load">
                <div className='center-box-experience'>
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
                                        <div className='image-icon image-background-experience'>
                                            <div className="img-load">
                                                <img className="image-lg" src={defaultIconLg} alt="Default Icon" />
                                                <img className="image-sm" src={defaultIconSm} alt="Default Icon" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <div className="label-bar-load">
                                            <h6 className='progress-text'>My Experience!</h6>
                                        </div>
                                        <div className="progress-load">
                                            <ProgressLine
                                                backgroundColor="lightblue"
                                                visualParts={[
                                                    {
                                                        percentage: "80%",
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

                                    <div className='info-align-experience fw-bold'>
                                        <div className="row g-0 meta-info-experience">
                                            <div className="col-12 col-md-6 p-3 text-center exp1-load">
                                                <div>
                                                    <OverlayTrigger
                                                        delay={{ hide: 450, show: 300 }}
                                                        overlay={(props) => (
                                                            <Tooltip {...props}>
                                                                <ul>
                                                                    <li>Working with AI</li>
                                                                    <li>Data Analysis</li>
                                                                    <li>Data Review</li>
                                                                </ul>
                                                            </Tooltip>
                                                        )}
                                                        placement="bottom"
                                                    ><div className="title-exp">Data Analyst</div>
                                                    </OverlayTrigger>
                                                </div>
                                                <div className="when-exp">
                                                    09/2024 - NOW
                                                </div>
                                                <div className="company-exp">
                                                    Volga Partners
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 p-3 text-center exp2-load">
                                                <div>
                                                    <OverlayTrigger
                                                        delay={{ hide: 450, show: 300 }}
                                                        overlay={(props) => (
                                                            <Tooltip {...props}>
                                                                <ul>
                                                                    <li>Place products</li>
                                                                    <li>Stock Review</li>
                                                                    <li>Add new products</li>
                                                                    <li>Branding First</li>
                                                                </ul>
                                                            </Tooltip>
                                                        )}
                                                        placement="bottom"
                                                    ><div className="title-exp">Night Stocker</div>
                                                    </OverlayTrigger>
                                                </div>
                                                <div className="when-exp">
                                                    07/2024 - 07/2024
                                                </div>
                                                <div className="company-exp">
                                                    Family Cash
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 p-3 text-center exp3-load">
                                                <div>
                                                    <OverlayTrigger
                                                        delay={{ hide: 450, show: 300 }}
                                                        overlay={(props) => (
                                                            <Tooltip {...props}>
                                                                <ul>
                                                                    <li>Worked with Laravel</li>
                                                                    <li>Python</li>
                                                                    <li>NodeJS</li>
                                                                    <li>Looker Studio</li>
                                                                    <li>Data Metrics</li>
                                                                    <li>Google API</li>
                                                                </ul>
                                                            </Tooltip>
                                                        )}
                                                        placement="bottom"
                                                    ><div className="title-exp">Web Developer</div>
                                                    </OverlayTrigger>
                                                </div>
                                                <div className="when-exp">
                                                    03/2024 - 06/2024
                                                </div>
                                                <div className="company-exp">
                                                    Pylon Data
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 p-3 text-center exp4-load">
                                                <div>
                                                    <OverlayTrigger
                                                        delay={{ hide: 450, show: 300 }}
                                                        overlay={(props) => (
                                                            <Tooltip {...props}>
                                                                <ul>
                                                                    <li>Worked with Laravel</li>
                                                                    <li>VueJS</li>
                                                                    <li>Bootstrap</li>
                                                                    <li>App Maintenance</li>
                                                                    <li>New Features</li>
                                                                </ul>
                                                            </Tooltip>
                                                        )}
                                                        placement="bottom"
                                                    ><div className="title-exp">Web Developer</div>
                                                    </OverlayTrigger>
                                                </div>
                                                <div className="when-exp">
                                                    11/2022 - 05/2023
                                                </div>
                                                <div className="company-exp">
                                                    Empatica.net
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 p-3 text-center exp5-load">
                                                <div>
                                                    <OverlayTrigger
                                                        delay={{ hide: 450, show: 300 }}
                                                        overlay={(props) => (
                                                            <Tooltip {...props}>
                                                                <ul>
                                                                    <li>Worked with WordPress</li>
                                                                    <li>PrestaShop</li>
                                                                    <li>PhotoShop</li>
                                                                    <li>Gimp</li>
                                                                    <li>SEO</li>
                                                                </ul>
                                                            </Tooltip>
                                                        )}
                                                        placement="bottom"
                                                    ><div className="title-exp">Web Designer</div>
                                                    </OverlayTrigger>
                                                </div>
                                                <div className="when-exp">
                                                    02/2021 - 05/2021
                                                </div>
                                                <div className="company-exp">
                                                    Estudio Web Doce
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-arrow d-flex justify-content-center">
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
    );
}

export default Experience;