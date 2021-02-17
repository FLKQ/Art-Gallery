import React, {useState, useEffect, useRef} from 'react';
import {Button} from '../GlobalStyle'
import {Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink} from './Navbar.elements';
import { IconContext } from 'react-icons/lib'
import {FaTimes, FaBars } from 'react-icons/fa';
import {TweenMax, Power3, gsap} from 'gsap';





const Navbar = () => {


     let MenuAnimation = useRef(null);
     let LogoAnimation = useRef(null);
     let ButtonAnimation = useRef(null);

     useEffect(() => {
       
         gsap.fromTo(MenuAnimation, {y: -100, opacity: 0}, {y: 0, opacity: 1, duration: 1.5, ease: Power3.easeOut});

         gsap.fromTo(LogoAnimation, {x: -250, opacity: 0}, {x: 0, opacity: 1, duration: 3, ease: Power3.easeOut});

         gsap.fromTo(ButtonAnimation, {x: 250, opacity: 0}, {x: 0, opacity: 1, duration: 3, ease: Power3.easeOut});
        

     }, []);

    
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleclick = () => setClick(!click);

    return (
        <>
        <IconContext.Provider value = {{color: 'fff'}}>
            
                <Nav>
                    
                        <NavbarContainer>
                            <NavLogo to="/" style={{alignItems: 'center'}} ref={el => {LogoAnimation = el}} >
                                <NavIcon />
                                    GAL
                                </NavLogo>
                                <MobileIcon onClick = {handleclick}>

                                    {click ? <FaTimes/> : <FaBars/> }

                                </MobileIcon>
                                <NavMenu onClick = {handleclick} click={click} ref={el => {MenuAnimation = el}}> 
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
                                                <Button  big colored primary style={{fontFamily: 'duera' , fontSize: '20px'}} ref={el => {ButtonAnimation = el}}>BUY TICKET</Button>
                                            </NavBtnLink>                     
                                        </NavItemBtn>
                        </NavbarContainer>
                    
                </Nav>
                    
            </IconContext.Provider>
            
        </>
    )
}

export default Navbar