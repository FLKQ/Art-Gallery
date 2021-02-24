import React,{useRef, useEffect} from 'react';
import {TicketButton} from './GetTicket.elements';
import StatementCard from './StatementCard';
import {ContactUsSection, ContactUsContainer, ContactUsWrapper, ContactUsInfoWrapper, ContactBuyTicketButton ,ContactUsTitle, ContactUsSubtitle, ContactUsMap} from './ContactUs.elements';
import {MdPhoneInTalk} from 'react-icons/md'
import {GrMail} from 'react-icons/gr'
import {IoLocationSharp} from 'react-icons/io5';
import ContactMap from '../Images/map.jpg';
import {gsap, Power3} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const ContactUs = () => {

    gsap.registerPlugin(ScrollTrigger);

    let TitleAnimation = useRef(null);
    let TitleBotAnimation = useRef(null);
    let SubtitleAnimation = useRef(null);
    let ButtonAnimation = useRef(null);
    let MapAnimation = useRef(null);

    let CurrentWidth = window.innerWidth;


    useEffect(() => {
        if(CurrentWidth > 1024){
        gsap.fromTo(TitleAnimation, {x: -20 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: TitleAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(TitleBotAnimation, {x: -30 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: TitleBotAnimation, start: 'top center+=100',toggleActions:'play none none none'}});
        gsap.fromTo(SubtitleAnimation, {x: -35 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: SubtitleAnimation, start: 'top center+=100',toggleActions:'play none none none'}});
        gsap.fromTo(ButtonAnimation, {x: -35 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
                scrollTrigger: {trigger: ButtonAnimation, start: 'top center+=300',toggleActions:'play none none none'}});
        gsap.fromTo(MapAnimation, {y: 100 , opacity: 0}, {y: 0, opacity: 1, duration: 1, delay: 1, ease: Power3.easeOut,
                    scrollTrigger: {trigger: MapAnimation, start: 'top center',toggleActions:'play none none none'}});
        }else{
            gsap.fromTo(TitleAnimation, {x: -20 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
                scrollTrigger: {trigger: TitleAnimation, start: 'top center',toggleActions:'play none none none'}});
            gsap.fromTo(TitleBotAnimation, {x: -30 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
                scrollTrigger: {trigger: TitleBotAnimation, start: 'top center+=100',toggleActions:'play none none none'}});
            gsap.fromTo(SubtitleAnimation, {x: -35 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
                scrollTrigger: {trigger: SubtitleAnimation, start: 'top center+=100',toggleActions:'play none none none'}});
            gsap.fromTo(ButtonAnimation, {x: -35 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
                    scrollTrigger: {trigger: ButtonAnimation, start: 'top center+=300',toggleActions:'play none none none'}});
            gsap.fromTo(MapAnimation, {y: 100 , opacity: 0}, {y: 0, opacity: 1, duration: 0.8, delay: 0, ease: Power3.easeOut,
                        scrollTrigger: {trigger: MapAnimation, start: 'top center',toggleActions:'play none none none'}});
        };

    },[]);



    return (
        <>
            <ContactUsSection>
                <ContactUsContainer>
                    <ContactUsWrapper>
                        <ContactUsInfoWrapper>
                            <ContactUsTitle style={{marginBottom: '0px'}} ref={el => {TitleAnimation = el}}>Contact</ContactUsTitle>
                            <ContactUsTitle style={{paddingTop: '0px'}} ref={el => {TitleBotAnimation = el}}>With Us Now</ContactUsTitle>
                            <ContactUsSubtitle ref={el => {SubtitleAnimation = el}}>Modern museums is to collect, preserve, interpret, and display objects of artistic.</ContactUsSubtitle>
                            <StatementCard  stretched="70" StatementTitle="+1(234)567-89-00" icon={<MdPhoneInTalk style={{width: '30px', height: '30px', color: 'black'}}/>}/>
                            <StatementCard stretched="90" StatementTitle="artmuseum@info.com" icon={<GrMail style={{width: '30px', height: '30px', color: 'black'}}/>}/>
                            <StatementCard  fadedaway="#a5a6a6" stretched="90" StatementTitle="38 North Lafayette Drive"
                             StatementTitleBottom="Lafayette, IN 47905" icon={<IoLocationSharp style={{width: '30px', height: '30px', color: 'black'}}
                             />}/>
                            <ContactBuyTicketButton style={{fontFamily: 'duera'}} ref={el => {ButtonAnimation = el}}>BUY TICKET</ContactBuyTicketButton>
                        </ContactUsInfoWrapper>
                        <ContactUsMap src={ContactMap} ref={el => {MapAnimation = el}}/>
                    </ContactUsWrapper>
                </ContactUsContainer>
            </ContactUsSection>
        </>
    )
}

export default ContactUs
