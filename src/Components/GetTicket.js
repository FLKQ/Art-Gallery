import React from 'react'
import{TicketContainer, TicketHolder, TextCenterer, TicketTitle, TicketSubTitle, TicketButton} from './GetTicket.elements';

const GetTicket = props => {
    return (
        <>
            <TicketContainer>
                <TicketHolder style={{backgroundColor: props.colored, justifyContent: props.spacevalue}} >
                    <TextCenterer style={{color: props.textstyle, marginLeft: props.centererdistace + 'px'}}>
                        <TicketTitle>{props.title}</TicketTitle>
                        <TicketSubTitle style={{width: props.fullsize + '%'}}>{props.subtitle}</TicketSubTitle>
                    </TextCenterer>
                        {props.field}
                        <TicketButton style={{fontFamily: 'duera', marginRight: props.buttondistance + 'px'}}>{props.value}</TicketButton>
                        
                </TicketHolder>
                
            </TicketContainer>
        </>
    )
}

export default GetTicket
