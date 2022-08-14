import React from 'react';
import image from '../../images/Header_Illustration.png';
import logo1 from '../../images/arrivae.svg';
import logo2 from '../../images/jobs.svg';
import logo3 from '../../images/bizom.svg';
import logo4 from '../../images/phable.svg';
import logo5 from '../../images/safex.svg';

function Section1() {
    return (
        <div className='section1_start'>
            <div className='section1_main'>
                <div className='left-fluid-padding section1_inner' >
                    <span className='head_title'>Create high performance</span><br />
                    <span className='head_title'>culture with OKRs</span>
                    <p className='description'>Use Fleo to make goals effective and
                        gets teams focused on company growth</p>
                </div>
                <img src={image} className="section1_image" />
            </div>
            <div className='clients_div'>
                <img src={logo1} className="client_logo" />
                <img src={logo2} className="client_logo" />
                <img src={logo3} className="client_logo" />
                <img src={logo4} className="client_logo" />
                <img src={logo5} className="client_logo" />
            </div>
        </div>
    )
}

export default Section1;