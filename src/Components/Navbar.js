import React, {useState, useEffect} from 'react';
import {Button} from '../GlobalStyle'
import {Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink} from './Navbar.elements';
import { IconContext } from 'react-icons/lib'
import {FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleclick = () => setClick(!click);

    return (
        <>
        <IconContext.Provider value = {{color: 'fff'}}>
                <Nav>
                        <NavbarContainer>
                            <NavLogo to="/">
                                <NavIcon/>
                                    GAL
                                </NavLogo>
                                <MobileIcon onClick = {handleclick}>

                                    {click ? <FaTimes/> : <FaBars/> }

                                </MobileIcon>
                                <NavMenu onClick = {handleclick} click={click}> 
                                    <NavItem>
                                        <NavLinks to = '/'>Exhibition</NavLinks>
                                    </NavItem>                                                      
                                    <NavItem>
                                        <NavLinks to = '/'>Events</NavLinks>
                                    </NavItem>                                                       
                                    <NavItem>
                                        <NavLinks to = '/'>Gallery</NavLinks>
                                    </NavItem>
                                    <NavItem>
                                        <NavLinks to = '/'>About</NavLinks>
                                    </NavItem>
                                    <NavItem>
                                        <NavLinks to = '/'>Curators</NavLinks>
                                    </NavItem>
                                    <NavItem>
                                        <NavLinks to = '/'>Blog</NavLinks>
                                    </NavItem>      
                                </NavMenu>
                                        <NavItemBtn>
                                            <NavBtnLink to="/">
                                                <Button  big colored primary style={{fontFamily: 'duera' , fontSize: '20px'}}>BUY TICKET</Button>
                                                
                                            </NavBtnLink>                     
                                        </NavItemBtn>
                        </NavbarContainer>
                    </Nav>
            </IconContext.Provider>
            
        </>
    )
}

export default Navbar