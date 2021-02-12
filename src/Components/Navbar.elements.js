import styled from 'styled-components';
import {Button, Container} from '../GlobalStyle';
import { Link } from 'react-router-dom';
import './HeaderElements.css';

export const Nav = styled.nav`
background: #121212;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 998;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;
padding: 0;
margin: 0;




${Container}
`;

export const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 3rem;
display: flex;
margin-left: 40px;
font-family: duera;

&:hover{
        color: #cc99ff;
        transition: all 0.5s ease;
}
`;

export const NavIcon = styled.h1`

`;

export const MobileIcon = styled.div`
display:none;


@media screen and (max-width: 960px){
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        font-size: 1.5rem;
        border: 1px solid #606060;
        padding: 10px 15px 7px 15px;
        cursor: pointer;
        margin-right: 20px;
        margin-top: 12px;
        border-radius: 5px;
        
}
`;

export const NavMenu = styled.ul`
        display:flex;
        align-items: center;
        list-style: none;
        text-align: center;
        

@media screen and (max-width: 960px){
display:flex;
flex-direction: column;
width: 100%;
height: 90.1vh;
position: absolute;
top: 80px;
left: ${({click}) => (click ? 0 : '-100%')};;
opacity: 1;
transition: all 0.5s ease;
background: #000000;
        
}
`;

export const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;





@media screen and (max-width: 960px){
        width: 100%;
        margin-top: 10px;

&:hover{
        color: #cc99ff;
        transition: all 0.3 ease;
}

}
`;

export const NavLinks = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;

&:hover{
        color: #cc99ff;
        transition: all 0.5s ease;
}

@media screen and (max-width: 960px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
}

`;

export const NavItemBtn = styled.li`
display:flex;
justify-content: flex-end;
margin-right: 20px;

@media screen and (max-width: 960px){
        display: none;
}
`;

export const NavBtnLink = styled(Link)`
display:flex;
justify-content: flex-end;
align-items: center;
text-decoration: none;
height: 100%;
width: 100%;
border: none;
outline: none;
`;





