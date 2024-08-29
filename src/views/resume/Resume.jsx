import React, { useEffect } from "react";
import gsap from "gsap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import defaultIconLg from '../../img/default-profile-icon-lg.png';
import defaultIconSm from '../../img/default-profile-icon-sm.png';
import './Resume.css';
import ProgressLine from '../../components/ProgressLine';
import Doc from '../../components/DocsComponent/Download-cv';
import Doc2 from '../../components/DocsComponent/Download-letter';

function Resume() {
    const url = 'https://zaos-website.com/resume';
    const navigate = useNavigate();

    let location = useLocation();
    useEffect(() => {
        gsap.fromTo(".btn1-load", { opacity: 0, x: -100, y: 0 }, { opacity: 1, x: 0, y: 0, duration: 1 });
        gsap.fromTo(".btn2-load", { opacity: 0, x: 100, y: 0 }, { opacity: 1, x: 0, y: 0, duration: 1.5 });
        gsap.fromTo(".img-load", { opacity: 0, x: 0, y: 100 }, { opacity: 1, x: 0, y: 0, delay: 0.5, duration: 1 });
        gsap.fromTo(".content-load", { opacity: 0, x: 100, y: 0 }, { opacity: 1, x: 0, y: 0, delay: 0, duration: 2 });
        gsap.fromTo(".arrow-load", { opacity: 0, x: 100, y: 0 }, { opacity: 1, x: 0, y: 0, delay: 2 });
        gsap.fromTo(".progress-load", { opacity: 0, x: 0, y: 50 }, { opacity: 1, x: 0, y: 0, duration: 1 });
        gsap.fromTo(".label-bar-load", { opacity: 0, x: 0, y: -20 }, { opacity: 1, x: 0, y: 0, duration: 1 });
    }, [location]);

    const handleLinkClickBack = (e) => {
        e.preventDefault();
        gsap.to(".btn1-load", { opacity: 0, x: -100, y: 0, duration: 1 });
        gsap.to(".btn2-load", { opacity: 0, x: 100, y: 0, duration: 1.5 });
        gsap.to(".progress-load", { opacity: 0, x: 0, y: 50, duration: 1 });
        gsap.to(".label-bar-load", { opacity: 0, x: 0, y: -20, duration: 1.5 });
        gsap.to(".img-load", { opacity: 0, x: 0, y: 100, duration: 0.5 });
        gsap.to(".content-load", { opacity: 0, x: 100, y: 0, duration: 2 });
        gsap.to(".arrow-load", {
            opacity: 0, x: -100, y: 0, delay: 0.5, onComplete: () => {
                navigate("/experience");
            }
        });
    };


    return (
        <div className="resume">
            <div className="resume-align content-load">
                <div className='center-box-resume'>
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
                                        <div className='image-icon image-background-resume'>
                                            <div className="img-load">
                                                <img className="image-lg" src={defaultIconLg} alt="Default Icon" />
                                                <img className="image-sm" src={defaultIconSm} alt="Default Icon" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <div className="label-bar-load">
                                            <h6 className='progress-text'>My Resume!</h6>
                                        </div>
                                        <div className="progress-load">
                                            <ProgressLine
                                                backgroundColor="lightblue"
                                                visualParts={[
                                                    {
                                                        percentage: "99%",
                                                        color: "indianred"
                                                    }
                                                ]}
                                            />
                                        </div>
                                    </div>
                                    <div className="row g-0">
                                        <div className="col-12 col-md-6 d-flex justify-content-center">
                                            <div className='p-3'>
                                                <a target="blank" href="https://github.com/zaos22" className="btn-github" aria-label='Check my GitHub'></a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 d-flex justify-content-center">
                                            <div className='p-3'>
                                                <a href="mailto:ozazou2001@gmail.com" className="btn-mail" aria-label='Contact me via mail'></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-8 top-info">
                                <div className="info-container">
                                    <div className='info-align-resume fw-bold'>
                                        <div className="row g-0 meta-info-resume">
                                            <div className="col-12 col-md-6 text-center btn1-load">
                                                <Doc
                                                    downloadLink="docs/My_CV.pdf"
                                                />
                                            </div>
                                            <div className="col-12 col-md-6 text-center btn2-load">
                                                <Doc2
                                                    downloadLink="docs/My_CV.pdf"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 pb-2 text-center arrow-load">
                                    <Link
                                        aria-label="Go back"
                                        to="/experience" onClick={handleLinkClickBack}>
                                        <MdOutlineArrowBackIosNew className='back-arrow next-arrow-bounce' />
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

export default Resume;