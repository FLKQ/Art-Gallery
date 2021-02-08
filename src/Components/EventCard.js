import React from 'react'
import { VerticalCardHolder, VerticalCardContainer, VerticalCardDate,
    VerticalCardMonth, VerticalCardDay,ColumnTextHolder,VerticalCardImage,ClockIcon,TimeHolder,ReadMoreButton
, RandomDiv} from './Events.elements.js';
import {Button} from '../GlobalStyle';



function EventCard(props){
    return (
            <>
                <VerticalCardHolder>
                    <VerticalCardContainer>
                        <VerticalCardDate>{props.date}</VerticalCardDate>
                        <ColumnTextHolder>
                            <VerticalCardMonth>{props.month}</VerticalCardMonth>
                            <VerticalCardDay>{props.day}</VerticalCardDay>
                        </ColumnTextHolder>
                        <VerticalCardImage src={props.VerticalImage}/>
                        <ColumnTextHolder>
                            <VerticalCardMonth>{props.description}</VerticalCardMonth>
                            <TimeHolder>
                                <ClockIcon/>
                                <VerticalCardDay>{props.time}</VerticalCardDay>
                            </TimeHolder>
                        </ColumnTextHolder>
                        <ReadMoreButton style={{fontFamily: 'duera'}}>READ MORE</ReadMoreButton>      
                    </VerticalCardContainer>
                </VerticalCardHolder>

            </>
    )

}

export default EventCard
