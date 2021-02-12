import React from 'react'
import {NavLogo, NavIcon} from './Navbar.elements';
import FooterMenu from './FooterMenu';
import {FooterSection, FooterContainer, FooterWrapper,LinksHolder} from './Footer.elements';
import StatementCard from './StatementCard';
import {ImFacebook, ImTwitter} from 'react-icons/im';
import {SiInstagram} from 'react-icons/si';



const Footer = () => {
    return (
        <>
            <FooterSection>
                <FooterContainer>
                    <FooterWrapper>
                        <NavLogo>
                            <NavIcon>GAL</NavIcon>
                        </NavLogo>
                        <FooterMenu title="Menu" second="About" third="Gallery"
                        fourth="Blog" fifth="Contact" />
                        <FooterMenu title="Explore" second="Exhibition" third="Events"
                        fourth="Curators" fifth="Testimonial" />
                        <LinksHolder>
                            <StatementCard style={{backgroundColor: '#8a66ad'}} icon={<ImFacebook/>} stretched="100"/>
                            <StatementCard icon={<ImTwitter/>} stretched="100"/>
                            <StatementCard icon={<SiInstagram/>} stretched="100"/>
                        </LinksHolder>
                    </FooterWrapper>
                </FooterContainer>
            </FooterSection>
            
        </>
    )
}

export default Footer
