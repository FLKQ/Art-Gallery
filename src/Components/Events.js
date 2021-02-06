import React from 'react'
import {EventSection, EventContainer, VerticalCardHolder, VerticalCardContainer, VerticalCardDate,
    VerticalCardMonth, VerticalCardDay,EventTitle,EventSubtitle,ReadMoreButton} from './Events.elements.js';
import EventCard from './EventCard';
import ColoredFace from '../Images/oneIn.jpg';
import OilDrawing from '../Images/twoIn.jpg';
import UnknownButCool from '../Images/threeIn.jpg';
import Circle from './Сircle';

const Events = () => {
    return (
        <>
            <EventSection>
                <EventContainer>
                        <EventTitle nopaddingbot>Upcoming</EventTitle>
                        <EventTitle zero > Events</EventTitle>
                        <EventSubtitle>Artistic,cultural, or scientific singinicance for the education of the public.</EventSubtitle>   
                        <EventCard date="15" month="January" day="Friday" VerticalImage={ColoredFace}
                        description="Primarily concerned with a space" time="9:00 pm - 3:00 pm"/>
                        <EventCard date="15" month="January" day="Friday" VerticalImage={OilDrawing}
                        description="Primarily concerned with a space" time="9:00 pm - 3:00 pm"/>
                        <EventCard date="15" month="January" day="Friday" VerticalImage={UnknownButCool}
                        description="Primarily concerned with a space" time="9:00 pm - 3:00 pm"/>
                        <ReadMoreButton style={{fontFamily: 'duera' }} whitened standart noMargin hugeTopMargin>EXPLORE ALL</ReadMoreButton>         
                </EventContainer>
            </EventSection>
            
        </>
    )
}

export default Events
