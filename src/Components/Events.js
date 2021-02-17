import React, {useRef,useEffect} from 'react';
import {EventSection, EventContainer, VerticalCardHolder, VerticalCardContainer, VerticalCardDate,
    VerticalCardMonth, VerticalCardDay,EventTitle,EventSubtitle,ReadMoreButton, CardOne, CardTwo, CardThree} from './Events.elements.js';
import EventCard from './EventCard';
import ColoredFace from '../Images/oneIn.jpg';
import OilDrawing from '../Images/twoIn.jpg';
import UnknownButCool from '../Images/threeIn.jpg';
import Circle from './Сircle';
import {gsap,Power3} from 'gsap';

const Events = () => {

    let TitleAnimation = useRef(null);
    let TitleBottomAnimation = useRef(null);
    let SubtitleAnimation = useRef(null);
    let CardFirstAnimation = useRef(null);
    let CardSecondAnimation = useRef(null);
    let CardThirdAnimation = useRef(null);
    let ButtonAnimation = useRef(null);

    useEffect(() => {
        gsap.fromTo(CardFirstAnimation, {x: -80 , opacity: 0}, {x: 0, opacity: 1, delay: 1, duration: 3, ease: Power3.easeOut});
        gsap.fromTo(CardSecondAnimation, {x: -80 , opacity: 0}, {x: 0, opacity: 1, delay: 1.5, duration: 3, ease: Power3.easeOut});
        gsap.fromTo(CardThirdAnimation, {x: -80 , opacity: 0}, {x: 0, opacity: 1, delay: 2, duration: 3, ease: Power3.easeOut});
        gsap.fromTo(TitleAnimation, {x: -80 , opacity: 0}, {x: 0, opacity: 1, delay: 1, duration: 3, ease: Power3.easeOut});
        gsap.fromTo(TitleBottomAnimation, {x: -80 , opacity: 0}, {x: 0, opacity: 1, delay: 1.5, duration: 3, ease: Power3.easeOut});
        gsap.fromTo(SubtitleAnimation, {x: -80 , opacity: 0}, {x: 0, opacity: 1, delay: 2, duration: 3, ease: Power3.easeOut});
        gsap.fromTo(ButtonAnimation, {scaleX: 1.5 , opacity: 0}, {scaleX: 1, opacity: 1, delay: 2.5, duration: 3, ease: Power3.easeOut});


    }, [])

    return (
        <>
            <EventSection>
                <EventContainer>
                        <EventTitle nopaddingbot ref={el => {TitleAnimation = el}}>Upcoming</EventTitle>
                        <EventTitle zero  ref={el => {TitleBottomAnimation = el}}> Events</EventTitle>
                        <EventSubtitle ref={el => {SubtitleAnimation = el}}>Artistic,cultural, or scientific singinicance for the education of the public.</EventSubtitle>
                        <CardOne ref={el => {CardFirstAnimation = el}}>   
                        <EventCard date="15" month="January" day="Friday" VerticalImage={ColoredFace}
                        description="Primarily concerned with a space" time="9:00 pm - 3:00 pm"/>
                        </CardOne>
                        <CardTwo ref={el => {CardSecondAnimation = el}}>
                        <EventCard date="15" month="January" day="Friday" VerticalImage={OilDrawing}
                        description="Primarily concerned with a space" time="9:00 pm - 3:00 pm"/>
                        </CardTwo>
                        <CardThree ref={el => {CardThirdAnimation = el}}>
                        <EventCard date="15" month="January" day="Friday" VerticalImage={UnknownButCool}
                        description="Primarily concerned with a space" time="9:00 pm - 3:00 pm"/>
                        </CardThree>

                        <ReadMoreButton style={{fontFamily: 'duera' }} whitened standart noMargin hugeTopMargin ref={el => {ButtonAnimation = el}}>EXPLORE ALL</ReadMoreButton>         
                </EventContainer>
            </EventSection>
            
        </>
    )
}

export default Events
