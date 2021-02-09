import React from 'react'
import './HeaderElements.css';
import {AboutUsSection, AboutUsContainer, AboutUsImageTextConnecter, AboutUsImageHolder, AboutUsImage, AboutUsColumnTextHolder, AboutUsTitle,
    AboutUsSubTitle, AboutUsButton, DigitsHolder, ColumnDigitsHolder,AboutUsTitleMid,AboutUsTitleBot,AboutUsSubTitleBot,RandomDiv} from './AboutUs.elements.js';
import ColumnDigits from './ColumnDigits';
import JustTest from '../Images/nex.jpg';

const AboutUs = () => {
    return (
        <>
            <AboutUsSection>
                <AboutUsContainer>
                    <AboutUsImageTextConnecter>
                        <AboutUsImageHolder>
                            <AboutUsImage src={JustTest}/>
                        </AboutUsImageHolder>
                        <AboutUsColumnTextHolder>
                            <AboutUsTitle>Artistic,</AboutUsTitle>
                            <AboutUsTitleMid>Cultural & Scientific</AboutUsTitleMid>
                            <AboutUsTitleBot>Significance</AboutUsTitleBot>
                            <AboutUsSubTitle>The purpose of modern museums is to collect, </AboutUsSubTitle>
                            <AboutUsSubTitleBot> preserve,interpret,and display objects of artistic.</AboutUsSubTitleBot>
                            <AboutUsButton style={{fontFamily: 'duera'}}>ABOUT US</AboutUsButton>
                        </AboutUsColumnTextHolder>
                    </AboutUsImageTextConnecter>
                </AboutUsContainer>
                <RandomDiv>
                <DigitsHolder>
                            <ColumnDigits digitTitle="730" digitSubTop="Community" digitSubBot="perspective"/>
                    </DigitsHolder>
                    <DigitsHolder>
                            <ColumnDigits digitTitle="730" digitSubTop="Community" digitSubBot="perspective"/>
                    </DigitsHolder>
                    <DigitsHolder>
                            <ColumnDigits digitTitle="730" digitSubTop="Community" digitSubBot="perspective"/>
                    </DigitsHolder>
                    </RandomDiv>
                    
            </AboutUsSection>
        </>
    )
}

export default AboutUs
