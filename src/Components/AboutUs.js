import React, {useRef, useEffect} from 'react'
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
import {TicketButton} from './GetTicket.elements';
import {gsap, Power3} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const AboutUs = () => {
    gsap.registerPlugin(ScrollTrigger);

    let TitleAnimation = useRef(null);
    let TitleMidAnimation = useRef(null);
    let TitleBotAnimation = useRef(null);
    let SubtitleAnimation = useRef(null);
    let SubtitleBotAnimation = useRef(null);
     let ButtonAnimation = useRef(null);
     let ImageAnimation = useRef(null);
    let FirstDigitAnimation = useRef(null);
    let SecondDigitAnimation = useRef(null);
    let ThirdDigitAnimation = useRef(null);
    let VideoAnimation = useRef(null);
    let VideoButtonAnimation = useRef(null);
    let IconAnimation = useRef(null);
    let IconTitleAnimation = useRef(null);
    let IconSubtitleAnimation = useRef(null);
    let CardTicketAnimation = useRef(null);

    


    useEffect(() => {
        gsap.fromTo(TitleAnimation, {x: -40 , opacity: 1}, {x: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: TitleAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(TitleMidAnimation, {x: 40 , opacity: 1}, {x: 0, opacity: 1, duration: 2, delay: 0.2, ease: Power3.easeOut,
            scrollTrigger: {trigger: TitleMidAnimation, start: 'top center+=100',toggleActions:'play none none none'}});
        gsap.fromTo(TitleBotAnimation, {x: -40 , opacity: 1}, {x: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: TitleBotAnimation, start: 'top center+=100',toggleActions:'play none none none'}});
        gsap.fromTo(SubtitleAnimation, {x: -40 , opacity: 1}, {x: 0, opacity: 1, duration: 2, delay: 0.5, ease: Power3.easeOut,
            scrollTrigger: {trigger: SubtitleAnimation, start: 'top center+=100',toggleActions:'play none none none'}});
        gsap.fromTo(SubtitleBotAnimation, {x: 40 , opacity: 1}, {x: 0, opacity: 1, duration: 2, delay: 0.5, ease: Power3.easeOut,
            scrollTrigger: {trigger: SubtitleBotAnimation, start: 'top center+=100',toggleActions:'play none none none'}});
        gsap.fromTo(ButtonAnimation, {y: 40 , opacity: 1}, {y: 0, opacity: 1, duration: 1, delay: 0.5, ease: Power3.easeOut,
            scrollTrigger: {trigger: ButtonAnimation, start: 'top center+=150',toggleActions:'play none none none'}});
        gsap.fromTo(ImageAnimation, {x: -40 , opacity: 1}, {x: 0, opacity: 1, duration: 2, delay: 0.2, ease: Power3.easeOut,
            scrollTrigger: {trigger: ImageAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(VideoAnimation, {y: 40 , opacity: 1}, {y: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: VideoAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(VideoButtonAnimation, {y: 40 , opacity: 1}, {y: 0, opacity: 1, duration: 1, delay: 0.7, ease: Power3.easeOut,
            scrollTrigger: {trigger: VideoButtonAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(CardTicketAnimation, {y: 40 , opacity: 1}, {y: 0, opacity: 1, duration: 1, delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: CardTicketAnimation, start: 'top center',toggleActions:'play none none none'}});

    }, [])


    return (
        <>
            <AboutUsSection>
                <AboutUsContainer>
                    <AboutUsImageTextConnecter>
                        <AboutUsImageHolder ref={el => {ImageAnimation = el}}>
                            <AboutUsImage src={BorderDrawing}/>
                        </AboutUsImageHolder>
                        <AboutUsColumnTextHolder>
                            <AboutUsTitle ref={el => {TitleAnimation = el}}>Artistic,</AboutUsTitle>
                            <AboutUsTitleMid ref={el => {TitleMidAnimation = el}}>Cultural & Scientific</AboutUsTitleMid>
                            <AboutUsTitleBot ref={el => {TitleBotAnimation = el}}>Significance</AboutUsTitleBot>
                            <AboutUsSubTitle ref={el => {SubtitleAnimation = el}}>The purpose of modern museums is to collect, </AboutUsSubTitle>
                            <AboutUsSubTitleBot ref={el => {SubtitleBotAnimation = el}}> preserve,interpret,and display objects of artistic.</AboutUsSubTitleBot>
                            <AboutUsButton style={{fontFamily: 'duera'}} ref={el => {ButtonAnimation = el}}>ABOUT US</AboutUsButton>
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
                            <ColumnDigits digitTitle="5,000" digitSubTop="One's point" digitSubBot="of view"/>
                    </DigitsHolder>
                    </RandomDiv>
                    <VideoPreviewHolder>
                        <VideoPreview src={Architecture} ref={el => {VideoAnimation = el}}/>
                        <VideoPlayButtonLink href="https://www.youtube.com/watch?v=AafJiUJ2b20&ab_channel=EditMoment%27S" ref={el => {VideoButtonAnimation = el}}>
                        <VideoPlayButton>
                            <VideoPlayButtonIcon/>
                        </VideoPlayButton>
                        </VideoPlayButtonLink>
                    </VideoPreviewHolder>
                    <AboutUsStatementHolder>
                        <AbousUsStatementCenterer>
                        <StatementCard StatementTitle="Collect Art" StatementSubTitle="Modern Museums is to collect, preserve,interpret, and display objects
                            of artistic,cultural,or scietific" icon={<FaUniversity style={{width: '30px', height: '30px'}}/>}/>
                        <StatementCard StatementTitle="Preserve Gallery" StatementSubTitle="Preserve,interpret,and display objects of artistic,cultural,
                        or scientific significance fro the education." icon={<FaPalette style={{width: '30px', height: '30px'}}/>}/>
                        <StatementCard StatementTitle="Interpret Exibition" StatementSubTitle="Scientific significance for the education of the public.From a visitor or community perspective." icon={<FaTheaterMasks style={{width: '30px', height: '30px'}}/>}/>
                            </AbousUsStatementCenterer>
                        </AboutUsStatementHolder>
                        <div ref={el => {CardTicketAnimation = el}}>
                        <GetTicket title="Get Your Ticket" subtitle="Museums is to collect, preserve, interpret, and display objects of artistic, cultural." value="BUY TICKET"
                        clickeroriginal={<TicketButton style={{fontFamily: 'duera'}}>BUY TICKET</TicketButton>}/>
                        </div>
                        <Curators/>
            </AboutUsSection>
        </>
    )
}

export default AboutUs
