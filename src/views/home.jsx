import { React } from 'react';
import defaultIcon from '../img/default-profile-icon.png';

function home() {
    const url = 'https://zaos.website.vercel.app.com';

    return (
        <div className="home">
            <div className='center'>
                <div className='d-flex justify-content-start'>
                    <div className='dot1' />
                    <div className='dot2 ms-1' />
                    <div className='dot3 ms-1' />

                    <input className='input-top-bar ms-3' type="text" defaultValue={url} />
                </div>

                <div className='d-flex justify-content-center'>
                    <div className='image-icon'>
                        {/* <img src={defaultIcon} alt="Default Icon" /> */}
                    </div>
                    <div>
                        Hello
                    </div>
                    <div className='ps-2 fw-bold'>
                        World!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default home;