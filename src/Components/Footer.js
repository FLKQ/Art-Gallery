import React from 'react'
import {NavLogo, NavIcon} from './Navbar.elements';
import FooterMenu from './FooterMenu';
import {FooterSection, FooterContainer, FooterWrapper,LinksHolder
, MoreInfoHolder, FooterCopyright, FooterTerms, FooterPolicy,FooterFadedBottomTextHolder, FooterMenuWrapper
,FooterLogo,FooterIcon } from './Footer.elements';
import StatementCard from './StatementCard';
import {ImFacebook, ImTwitter} from 'react-icons/im';
import {SiInstagram} from 'react-icons/si';



const Footer = () => {
    return (
        <>
            <FooterSection>
                <FooterContainer>
                    <FooterWrapper>
                        <FooterLogo>
                            <FooterIcon>GAL</FooterIcon>
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
                    <FooterCopyright>Copyright @ 2021 FLKQ.All Rights Reserved.</FooterCopyright>
                    <MoreInfoHolder>
                        <FooterTerms>Terms Of Use</FooterTerms>
                     <FooterPolicy to = '/'>Privacy Policy</FooterPolicy>   
                    </MoreInfoHolder>
                    </FooterFadedBottomTextHolder>
                </FooterContainer>
            </FooterSection>
            
        </>
    )
}

export default Footer
