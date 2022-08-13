import React from 'react';
import img from '../../images/integration.svg';

function Section5() {
    return (
        <div style={{ paddingTop: 100, paddingBottom: 100, backgroundColor: '#fff', padding: "100px calc((100vw - 1000px) / 6)" }}>
            <div style={{ marginBottom: 40 }}>
                <span className='head_title'>Integration</span>
            </div>
            <span className='description_section_3'>Fleo captures everyone’s involvement and</span><br />
            <span className='description_section_3'>helps with uniform distribution of work.</span>
            <img src={img} style={{ height: 'auto', width: '100%', marginTop: 150 }} />
        </div>
    )
}

export default Section5;