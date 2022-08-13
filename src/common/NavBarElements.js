import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #FFFFFF;
height: 70px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 6);
z-index: 12;
box-shadow: 10px 10px 5px -10px rgba(206, 176, 147, 0.8);
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
color: #56402A;
display: flex;
font-weight: 700;
font-size: 14px;
align-items: center;
text-decoration: none;
margin: 0 1rem;

height: 50%;
cursor: pointer;
&.active {
	color: #2A52E0;
    border-bottom: 2px solid #2A52E0;
}
`;


export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #DF581E;
padding: 10px 22px;
color: #fff;
outline: none;
font-weight:700;
border: none;
cursor: pointer;
box-shadow: inset 0px 4px 4px rgba(255, 255, 255, 0.25);
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #56402A;
}
`;
