import React, { useEffect } from "react";
import gsap from "gsap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import defaultIconLg from '../../img/default-profile-icon-lg.png';
import defaultIconSm from '../../img/default-profile-icon-sm.png';
import './Resume.css';
import ProgressLine from '../../components/ProgressLine';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../../components/Lang/LanguageSelector';

function Resume() {
    const url = 'https://www.linkedin.com/in/zazou-abid/';
    const navigate = useNavigate();

    let location = useLocation();
    useEffect(() => {
        gsap.fromTo(".btn1-load", { opacity: 0, x: 0, y: 100 }, { opacity: 1, x: 0, y: 0, duration: 1 });
        gsap.fromTo(".btn2-load", { opacity: 0, x: 0, y: 100 }, { opacity: 1, x: 0, y: 0, duration: 1.5 });
        gsap.fromTo(".btn3-load", { opacity: 0, x: 0, y: 100 }, { opacity: 1, x: 0, y: 0, duration: 2 });
        gsap.fromTo(".img-load", { opacity: 0, x: 0, y: 100 }, { opacity: 1, x: 0, y: 0, delay: 0.5, duration: 1 });
        gsap.fromTo(".content-load", { opacity: 0, x: 100, y: 0 }, { opacity: 1, x: 0, y: 0, delay: 0, duration: 2 });
        gsap.fromTo(".arrow-load", { opacity: 0, x: 100, y: 0 }, { opacity: 1, x: 0, y: 0, delay: 2 });
        gsap.fromTo(".progress-load", { opacity: 0, x: 0, y: 50 }, { opacity: 1, x: 0, y: 0, duration: 1 });
        gsap.fromTo(".label-bar-load", { opacity: 0, x: 0, y: -20 }, { opacity: 1, x: 0, y: 0, duration: 1 });
    }, [location]);

    const handleLinkClickBack = (e) => {
        e.preventDefault();
        gsap.to(".btn1-load", { opacity: 0, x: 0, y: 100, duration: 1 });
        gsap.to(".btn2-load", { opacity: 0, x: 0, y: 100, duration: 1.5 });
        gsap.to(".btn3-load", { opacity: 0, x: 0, y: 100, duration: 2 });
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

    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const renderDownloadButton = () => {
        switch (currentLanguage) {
            case 'es':
                return (
                    <div className="col-12 col-md-4 d-flex justify-content-center btn3-load">
                        <div className='p-3 centered-content'>
                        <label className="pb-2 label-text text" htmlFor="myGitHub">{t("download_my")} {t("resume")}</label>
                            <a href="docs/MyCV_es.pdf" className="btn-download" aria-label='Descarga mi curriculum en español' download></a>
                        </div>
                    </div>
                );
            case 'ca':
                return (
                    <div className="col-12 col-md-4 d-flex justify-content-center btn3-load">
                        <div className='p-3 centered-content'>
                        <label className="pb-2 label-text text" htmlFor="myGitHub">{t("download_my")} {t("resume")}</label>
                            <a href="docs/MyCV_ca.pdf" className="btn-download" aria-label="Descarrega't el meu currículum en català" download></a>
                        </div>
                    </div>
                );
            case 'de':
                return (
                    <div className="col-12 col-md-4 d-flex justify-content-center btn3-load">
                        <div className='p-3 centered-content'>
                        <label className="pb-2 label-text text" htmlFor="myGitHub">{t("download_my")} {t("resume")}</label>
                            <a href="docs/MyCV_de.pdf" className="btn-download" aria-label='Laden Sie meinen Lebenslauf auf Deutsch herunter' download></a>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="col-12 col-md-4 d-flex justify-content-center btn3-load">
                        <div className='p-3 centered-content'>
                            <label className="pb-2 label-text text" htmlFor="myGitHub">{t("download_my")} {t("resume")}</label>
                            <a href="docs/MyCV_en.pdf" className="btn-download" aria-label='Download my resume in English' download></a>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="resume">
            <div className="resume-align content-load">
                <div className="text-end p-2">
                    <LanguageSelector />
                </div>
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
                        />
                        <input
                            aria-label="Page link"
                            className='input-top-bar-lg'
                            type="text"
                            defaultValue={url}
                        />
                    </div>
                    <div className="container px-4 mt-4 mb-4">
                        <div className="row g-0">
                            <div className="col-12">
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
                                        <div className="label-bar-load text-white">
                                            <h6 className='progress-text text'>{t("my_resume")}</h6>
                                        </div>
                                        <div className="progress-load">
                                            <ProgressLine
                                                backgroundColor="lightblue"
                                                visualParts={[
                                                    {
                                                        percentage: "99%",
                                                        color: "lightgreen"
                                                    }
                                                ]}
                                            />
                                        </div>
                                    </div>
                                    <div className="row g-0">
                                        <div className="col-12 col-md-4 d-flex justify-content-center btn1-load">
                                            <div className='p-3 centered-content'>
                                                <label className="pb-2 label-text text" htmlFor="myGitHub">{t("check_my")} {t("projects")}</label>
                                                <a name="myGitHub" target="blank" href="https://github.com/zaos22" className="btn-github" aria-label='Check my GitHub'></a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 d-flex justify-content-center btn2-load">
                                            <div className='p-3 centered-content'>
                                                <label className="pb-2 label-text text" htmlFor="myGitHub">{t("contact_me")} {t("by_email")}</label>
                                                <a href="mailto:ozazou2001@gmail.com" className="btn-mail" aria-label='Contact me via mail'></a>
                                            </div>
                                        </div>
                                        {renderDownloadButton()}
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
    );
}

export default Resume;