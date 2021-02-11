import React from 'react'
import{TicketContainer, TicketHolder, TextCenterer, TicketTitle, TicketSubTitle, TicketButton} from './GetTicket.elements';

const GetTicket = props => {
    return (
        <>
            <TicketContainer>
                <TicketHolder style={{backgroundColor: props.colored}}>
                    <TextCenterer>
                        <TicketTitle>{props.title}</TicketTitle>
                        <TicketSubTitle>{props.subtitle}</TicketSubTitle>
                    </TextCenterer>
                        <TicketButton style={{fontFamily: 'duera'}}>{props.value}</TicketButton>
                </TicketHolder>
            </TicketContainer>
        </>
    )
}

export default GetTicket
