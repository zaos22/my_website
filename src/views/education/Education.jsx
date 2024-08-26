import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import './Education.css';

function Education() {
    const navigate = useNavigate();

    const [showText2, setShowText2] = useState(false);

    useEffect(() => {
        const timer2 = setTimeout(() => setShowText2(true), 500);

        return () => {
            clearTimeout(timer2);
        };
    }, []);

    let location = useLocation();
    useEffect(() => {
        gsap.fromTo(".content-load", { opacity: 0, x: 100, y: 0 }, { opacity: 1, x: 0, y: 0, delay: 0, duration: 2 });
        gsap.fromTo(".arrow-load", { opacity: 0, x: 100, y: 0 }, { opacity: 1, x: 0, y: 0, delay: 5 });
    }, [location]);

    const handleLinkClickNext = (e) => {
        e.preventDefault();
        gsap.to(".content-load", { opacity: 0, x: -100, y: 0, duration: 2 });
        gsap.to(".arrow-load", {
            opacity: 0, x: -100, y: 0, delay: 0.5, onComplete: () => {
                navigate("/experience");
            }
        });
    };

    const handleLinkClickBack = (e) => {
        e.preventDefault();
        gsap.to(".content-load", { opacity: 0, x: 100, y: 0, duration: 2 });
        gsap.to(".arrow-load", {
            opacity: 0, x: -100, y: 0, delay: 0.5, onComplete: () => {
                navigate("/skills");
            }
        });
    };

    return (
        <div className="education">
            <div className="education-align content-load">
                <div className='center-box-education'>
                    <div className='top-bar-education'>
                        <div className='dots-container'>
                            <div className='dot1 mt-2' />
                            <div className='dot2 mt-2 ms-1' />
                            <div className='dot3 mt-2 ms-1 me-3' />
                        </div>
                        <div className='window-top-bar'>
                            <p>
                                <ImBooks color="pink" /> Education Background
                            </p>
                        </div>/
                    </div>
                    <div className="container px-2 mt-4 mb-4 text">
                        <div className="row g-0">
                            <div className="col-12 col-md-6 p-3 text-center">
                                <div className={`title-education ${showText2 ? 'show-text' : ''}`}>
                                    Cross play Application Development
                                </div>
                                <div className={`year-education ${showText2 ? 'show-text' : ''}`}>
                                    2023-2024
                                </div>
                                <div className={`school-education ${showText2 ? 'show-text' : ''}`}>
                                    IES Joan Coromines
                                </div>
                            </div>
                            <div className="col-12 col-md-6 p-3 text-center">
                                <div className={`title-education ${showText2 ? 'show-text' : ''}`}>
                                    Web Applications Development
                                </div>
                                <div className={`year-education ${showText2 ? 'show-text' : ''}`}>
                                    2021-2023
                                </div>
                                <div className={`school-education ${showText2 ? 'show-text' : ''}`}>
                                    Institut Montsià
                                </div>
                            </div>
                            <div className="col-12 col-md-6 p-3 text-center">
                                <div className={`title-education ${showText2 ? 'show-text' : ''}`}>
                                    Microcomputer Systems & Network Technician                                </div>
                                <div className={`year-education ${showText2 ? 'show-text' : ''}`}>
                                    2019-2021
                                </div>
                                <div className={`school-education ${showText2 ? 'show-text' : ''}`}>
                                    IES Joan Coromines
                                </div>
                            </div>
                            <div className="col-12 col-md-6 p-3 text-center">
                                <div className={`title-education ${showText2 ? 'show-text' : ''}`}>
                                    Compulsory Secondary Education
                                </div>
                                <div className={`year-education ${showText2 ? 'show-text' : ''}`}>
                                    2014-2019
                                </div>
                                <div className={`school-education ${showText2 ? 'show-text' : ''}`}>
                                    La Salle
                                </div>
                            </div>
                        </div>
                        <div className="pt-4 pb-2 d-flex justify-content-center">
                            <div className='arrow-load pe-5'>
                                <Link
                                    to="/skills" onClick={handleLinkClickBack}>
                                    <MdOutlineArrowBackIosNew className='back-arrow next-arrow-bounce' />
                                </Link>
                            </div>
                            <div className='arrow-load'>
                                <Link
                                    to="/experience" onClick={handleLinkClickNext}>
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

export default Education;