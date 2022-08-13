import React from 'react';
import whitelogo from '../images/fleo_white.svg'
import fb from '../images/fb.svg'
import whatsapp from '../images/whatsapp.svg'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'

function Footer() {
    return (
        <div className='footer_main'>
            <div style={{ flex: 0.3, textAlign: 'left' }}>
                <span className='footer_text'>
                    Email: hello@fleo.io
                </span><br />
                <span className='footer_text'>
                    Phone: +91 87654 44000
                </span><br />
                <span className='footer_text'>
                    Address: No. 1207/343, 9th Main, Sector 7, HSR Layout, Bengaluru, Karnataka - 560102
                </span>
            </div>

            <img src={whitelogo} />
            <div style={{ flex: 0.3, textAlign: 'right' }}>
                <div style={{ marginBottom: 30 }}>
                    <a href='#'>
                        <img src={linkedin} className='social_icons' />
                    </a>

                    <a href='#'>
                        <img src={fb} className='social_icons' />
                    </a>
                    <a href='#'>
                        <img src={whatsapp} className='social_icons' />
                    </a>
                    <a href='#'>
                        <img src={twitter} className='social_icons' />
                    </a>
                </div>
                <span className='footer_quote'>
                    Fleo shows you the areas that need your attention, it will be your go-to tool for internal business reviews
                </span>
            </div>

        </div>
    )
}

export default Footer;