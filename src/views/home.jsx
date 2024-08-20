import { React } from 'react';
import defaultIconLg from '../img/default-profile-icon-lg.png';
import defaultIconSm from '../img/default-profile-icon-sm.png';
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import ProgressLine from '../components/ProgressLine';

function home() {
    const url = 'https://zaos-website.com/about-me';

    return (
        <div className="home">
            <div className='center'>
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
                                        <img className="image-lg" src={defaultIconLg} alt="Default Icon" />
                                        <img className="image-sm" src={defaultIconSm} alt="Default Icon" />
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <h6 className='text-center'>About me!</h6>
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
                        <div className="col-12 col-md-8 top-info">
                            <div className='quote-left'>
                                <ImQuotesLeft color='black' size={25} />
                            </div>
                            <div className="info-container">
                                <div className=''>
                                    <div className='meta-info-align fw-bold'>
                                        <p className='meta-info'>
                                            I'm Oussama, a passionate web developer with a strong command of full-stack programming. My objective is to turn ideas into minimalist websites, but at the same time that captivate and engage users. Let's build something simple, but amazing together!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='quote-right text-end'>
                                <ImQuotesRight color='black' size={25} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default home;