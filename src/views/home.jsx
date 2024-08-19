import { React } from 'react';
import defaultIcon from '../img/default-profile-icon.png';
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import ProgressBar from '../components/progressBar';

function home() {
    const url = 'https://zaos.website.vercel.app.com';

    return (
        <div className="home">
            <div className='center'>
                <div className='d-flex justify-content-start'>
                    <div className='dot1 mt-2' />
                    <div className='dot2 mt-2 ms-1' />
                    <div className='dot3 mt-2 ms-1' />

                    <input
                        className='input-top-bar ms-3'
                        type="text"
                        defaultValue={url}
                        disabled={true}
                    />
                </div>

                <div className='d-flex justify-content-center mt-5 mb-5'>
                    <div className='image-icon' style={{ with: '40%' }}>
                        <img src={defaultIcon} alt="Default Icon" />
                    </div>
                </div>
                <div>
                    <ProgressBar value={50}/>
                </div>
                <div className='d-flex justify-content-center mt-5 mb-5'>
                    <div className='ms-5'>
                        <ImQuotesLeft color='black' size={50} />
                    </div>
                    <div className='ms-5 me-5 fw-bold text-center d-flex align-items-center justify-content-center' style={{ width: '60%' }}>
                        <span className='ms-2 me-2'>
                            I'm Oussama, a passionate web developer with a strong command of full-stack programming. My objective is to turn ideas into minimalist websites, but at the same time that captivate and engage users. Let's build something simple, but amazing together!
                        </span>
                    </div>
                    <div className='me-5' style={{ position: 'absolute', bottom: '30px', right: '60px' }}>
                        <ImQuotesRight color='black' size={50} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default home;