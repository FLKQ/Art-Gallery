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


     const CurrentWidth =  window.innerWidth;
    
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleclick = () => setClick(!click);


     const ExhibitionScroll = () => {
     if(CurrentWidth <= 960){
        window.scrollTo({top: 850, behavior: "smooth"});
    }else{
        window.scrollTo({top: 900, behavior: "smooth"});
    };
}

const EventsScroll = () => {
    if(CurrentWidth <= 960){
       window.scrollTo({top: 5800, behavior: "smooth"});
   }else{
       window.scrollTo({top: 2950, behavior: "smooth"});
   };
}

const GalleryScroll = () => {
    if(CurrentWidth <= 960){
       window.scrollTo({top: 8300, behavior: "smooth"});
   }else{
       window.scrollTo({top: 4200, behavior: "smooth"});
   };
}

const AboutScroll = () => {
    if(CurrentWidth <= 960){
       window.scrollTo({top: 11800, behavior: "smooth"});
   }else{
       window.scrollTo({top: 5700, behavior: "smooth"});
   };
}
const CuratorsScroll = () => {
    if(CurrentWidth <= 960){
       window.scrollTo({top: 16250, behavior: "smooth"});
   }else{
       window.scrollTo({top: 8800, behavior: "smooth"});
   };
}

const BlogScroll = () => {
    if(CurrentWidth <= 960){
       window.scrollTo({top: 21100, behavior: "smooth"});
   }else{
       window.scrollTo({top: 10750, behavior: "smooth"});
   };
}

const GoHomeScroll = () => {
    if(CurrentWidth <= 960){
       window.scrollTo({top: 0, behavior: "smooth"});
   }else{
       window.scrollTo({top: 0, behavior: "smooth"});
   };
}


    


    return (
        <>
        <IconContext.Provider value = {{color: 'fff'}}>
            
                <Nav>
                    
                        <NavbarContainer>
                            <NavLogo to="/" style={{alignItems: 'center'}} ref={el => {LogoAnimation = el}} onClick={() => {GoHomeScroll();}}>
                                <NavIcon />
                                    GAL
                                </NavLogo>
                                <MobileIcon onClick = {handleclick}>

                                    {click ? <FaTimes/> : <FaBars/> }

                                </MobileIcon>
                                <NavMenu onClick = {handleclick} click={click} ref={el => {MenuAnimation = el}}> 
                                    <NavItem>
                                        <NavLinks to = '/'onClick={() => {ExhibitionScroll();}}>Exhibition</NavLinks>
                                    </NavItem>                                                      
                                    <NavItem>
                                        <NavLinks to = '/' onClick={() => {EventsScroll();}}>Events</NavLinks>
                                    </NavItem>                                                       
                                    <NavItem>
                                        <NavLinks to = '/' onClick={() => {GalleryScroll();}}>Gallery</NavLinks>
                                    </NavItem>
                                    <NavItem>
                                        <NavLinks to = '/' onClick={() => {AboutScroll();}}>About</NavLinks>
                                    </NavItem>
                                    <NavItem>
                                        <NavLinks to = '/' onClick={() => {CuratorsScroll();}}>Curators</NavLinks>
                                    </NavItem>
                                    <NavItem>
                                        <NavLinks to = '/' onClick={() => {BlogScroll();}}>Blog</NavLinks>
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