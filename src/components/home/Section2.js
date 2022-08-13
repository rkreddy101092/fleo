import React from 'react';
import image from '../../images/section_2_ilstr.png';


function Section2() {
    return (

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 100, paddingBottom: 100 }}>
            <img src={image} style={{ flex: 0.5, paddingLeft: 'calc((100vw - 1000px) / 6)', height: "auto", width: '100%', resize: 'contain', objectFit: 'contain' }} />
            <div style={{ flex: 0.5, textAlign: 'left', paddingLeft: 45 }}>
                <span className='head_title'>Plan Better</span><br />
                <span className='head_title'>Do Better</span>
                <p className='description_section_2'>Spend sometime planning
                    the success map </p>
            </div>
        </div>


    )
}

export default Section2;