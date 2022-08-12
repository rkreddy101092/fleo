import React from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavBarElements';

function Header() {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/products' activeStyle>
                        Products
                    </NavLink>
                    <NavLink to='/annual' activeStyle>
                        Why us?
                    </NavLink>
                    <NavLink to='/team' activeStyle>
                        Pricing
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavLink to='/sign-up' activeStyle>
                        Sign In
                    </NavLink>
                    <NavBtnLink to='/signin'>Request Demo</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Header;