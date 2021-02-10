import React from 'react'
import './HeaderElements.css';
import {AboutUsSection, AboutUsContainer, AboutUsImageTextConnecter, AboutUsImageHolder, AboutUsImage, AboutUsColumnTextHolder, AboutUsTitle,
    AboutUsSubTitle, AboutUsButton, DigitsHolder, ColumnDigitsHolder,AboutUsTitleMid,AboutUsTitleBot,AboutUsSubTitleBot,RandomDiv,VideoPreviewHolder,
    VideoPreview, VideoPlayButton, VideoPlayButtonIcon,VideoPlayButtonLink, AboutUsStatementHolder,AbousUsStatementCenterer
} from './AboutUs.elements.js';
import ColumnDigits from './ColumnDigits';
import Architecture from '../Images/videoPic.jpg';
import BorderDrawing from '../Images/borderDrawing.jpg';
import StatementCard from './StatementCard';
import {FaUniversity, FaPalette, FaTheaterMasks} from 'react-icons/fa';
import GetTicket from './GetTicket';
import Curators from './Curators';

const AboutUs = () => {
    return (
        <>
            <AboutUsSection>
                <AboutUsContainer>
                    <AboutUsImageTextConnecter>
                        <AboutUsImageHolder>
                            <AboutUsImage src={BorderDrawing}/>
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
                            <ColumnDigits digitTitle="420" digitSubTop="Education" digitSubBot="of the public"/>
                    </DigitsHolder>
                    <DigitsHolder>
                            <ColumnDigits digitTitle="5000" digitSubTop="One's point" digitSubBot="of view"/>
                    </DigitsHolder>
                    </RandomDiv>
                    <VideoPreviewHolder>
                        <VideoPreview src={Architecture}/>
                        <VideoPlayButtonLink href="https://www.youtube.com/watch?v=AafJiUJ2b20&ab_channel=EditMoment%27S">
                        <VideoPlayButton>
                            <VideoPlayButtonIcon/>
                        </VideoPlayButton>
                        </VideoPlayButtonLink>
                    </VideoPreviewHolder>
                    <AboutUsStatementHolder>
                        <AbousUsStatementCenterer>
                        <StatementCard StatementTitle="Collect Art" StatementSubTitle="Modern Museums is to collect, preserve,interpret, and display objects
                            of artistic,cultural,or scietific" icon={<FaUniversity style={{width: '30px', height: '30px'}}/>}/>
                        <StatementCard StatementTitle="Collect Art" StatementSubTitle="Modern Museums is to collect, preserve,interpret, and display objects
                            of artistic,cultural,or scietific" icon={<FaPalette style={{width: '30px', height: '30px'}}/>}/>
                        <StatementCard StatementTitle="Collect Art" StatementSubTitle="Modern Museums is to collect, preserve,interpret, and display objects
                            of artistic,cultural,or scietific" icon={<FaTheaterMasks style={{width: '30px', height: '30px'}}/>}/>
                            </AbousUsStatementCenterer>
                        </AboutUsStatementHolder>
                        <GetTicket title="Get Your Ticket" subtitle="Museums is to collect, preserve, interpret, and display objects of artistic, cultural" value="BUY TICKET"/>
                        <Curators/>
            </AboutUsSection>
        </>
    )
}

export default AboutUs
