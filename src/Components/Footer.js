import React, {useRef, useEffect} from 'react';
import {NavLogo, NavIcon} from './Navbar.elements';
import FooterMenu from './FooterMenu';
import {FooterSection, FooterContainer, FooterWrapper,LinksHolder
, MoreInfoHolder, FooterCopyright, FooterTerms, FooterPolicy,FooterFadedBottomTextHolder, FooterMenuWrapper
,FooterLogo,FooterIcon } from './Footer.elements';
import StatementCard from './StatementCard';
import {ImFacebook, ImTwitter} from 'react-icons/im';
import {SiInstagram} from 'react-icons/si';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {gsap, Power3} from 'gsap';

const Footer = () => {
     gsap.registerPlugin(ScrollTrigger);

    let logoAnimation = useRef(null);
    let CopyrightAnimation = useRef(null); 
    let TermsAnimation = useRef(null); 
    let PrivacyAnimation = useRef(null);  

    useEffect( () => {
        gsap.fromTo(logoAnimation, {x: -50 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: logoAnimation, start: 'top center+=150',toggleActions:'play none none none'}});
        gsap.fromTo(CopyrightAnimation, {y: 50 , opacity: 0}, {y: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
                scrollTrigger: {trigger: CopyrightAnimation, start: 'top top+=1000',toggleActions:'play none none none'}});  
        gsap.fromTo(TermsAnimation, {y: 50 , opacity: 0}, {y: 0 , opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
                    scrollTrigger: {trigger: TermsAnimation, start: 'top top+=1000',toggleActions:'play none none none'}});
        gsap.fromTo(PrivacyAnimation, {y: 50 , opacity: 0}, {y: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
                        scrollTrigger: {trigger: PrivacyAnimation, start: 'top top+=1000',toggleActions:'play none none none'}});        
    }, []);

    return (

        <>
            <FooterSection>
                <FooterContainer>
                    <FooterWrapper>
                        <FooterLogo>
                            <FooterIcon ref={el => {logoAnimation = el}}>GAL</FooterIcon>
                        </FooterLogo>
                        <FooterMenuWrapper>
                        <FooterMenu title="Menu" second="About" third="Gallery"
                        fourth="Blog" fifth="Contact" />
                        <FooterMenu title="Explore" second="Exhibition" third="Events"
                        fourth="Curators" fifth="Testimonial" />
                        </FooterMenuWrapper>
                        <LinksHolder>
                            <StatementCard style={{backgroundColor: '#8a66ad'}} icon={<ImFacebook/>} stretched="100"/>
                            <StatementCard icon={<ImTwitter/>} stretched="100"/>
                            <StatementCard icon={<SiInstagram/>} stretched="100"/>
                        </LinksHolder>
                    </FooterWrapper>
                    <FooterFadedBottomTextHolder>
                    <FooterCopyright ref={el => {CopyrightAnimation = el}}>Copyright @ 2021 FLKQ.All Rights Reserved.</FooterCopyright>
                    <MoreInfoHolder>
                        <FooterTerms ref={el => {TermsAnimation = el}}>Terms Of Use</FooterTerms>
                     <FooterPolicy to = '/' ref={el => {PrivacyAnimation = el}}>Privacy Policy</FooterPolicy>   
                    </MoreInfoHolder>
                    </FooterFadedBottomTextHolder>
                </FooterContainer>
            </FooterSection>
            
        </>
    )
}

export default Footer
