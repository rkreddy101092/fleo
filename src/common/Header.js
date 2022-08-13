import React from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavBarElements';

import logo from '../images/logo.svg'

function Header() {
    return (
        <>
            <Nav>
                <NavMenu>
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: 50 }}>
                        <img src={logo} />
                    </div>

                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/products' activeStyle>
                        Products
                    </NavLink>
                    <NavLink to='/why-us' activeStyle>
                        Why us?
                    </NavLink>
                    <NavLink to='/pricing' activeStyle>
                        Pricing
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavLink to='/sign-up' activeStyle>
                        Sign In
                    </NavLink>
                    <NavBtnLink to='/demo'>Request Demo</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Header;