import React from 'react';
import image from '../../images/Header_Illustration.png';
import logo1 from '../../images/arrivae.svg';
import logo2 from '../../images/jobs.svg';
import logo3 from '../../images/bizom.svg';
import logo4 from '../../images/phable.svg';
import logo5 from '../../images/safex.svg';

function Section1() {
    return (
        <div style={{ paddingTop: 100 }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                <div style={{ flex: 0.5, paddingLeft: 'calc((100vw - 1000px) / 6)', textAlign: 'left' }}>
                    <span className='head_title'>Create high performance</span><br />
                    <span className='head_title'>culture with OKRs</span>
                    <p className='description'>Use Fleo to make goals effective and
                        gets teams focused on company growth</p>
                </div>
                <img src={image} style={{ flex: 0.5, height: "auto", width: '100%', resize: 'contain', objectFit: 'contain' }} />
            </div>
            <div style={{ backgroundColor: '#FFFFFF', alignItems: 'center', display: 'flex', height: 90, bottom: 0 }}>
                <img src={logo1} style={{ flex: 0.5, height: 50, width: 'auto', resize: 'contain', objectFit: 'contain' }} />
                <img src={logo2} style={{ flex: 0.5, height: 50, width: 'auto', resize: 'contain', objectFit: 'contain' }} />
                <img src={logo3} style={{ flex: 0.5, height: 50, width: 'auto', resize: 'contain', objectFit: 'contain' }} />
                <img src={logo4} style={{ flex: 0.5, height: 50, width: 'auto', resize: 'contain', objectFit: 'contain' }} />
                <img src={logo5} style={{ flex: 0.5, height: 50, width: 'auto', resize: 'contain', objectFit: 'contain' }} />
            </div>
        </div>
    )
}

export default Section1;