import React from 'react'
import{TicketContainer, TicketHolder, TextCenterer, TicketTitle, TicketSubTitle, TicketButton} from './GetTicket.elements';

const GetTicket = props => {
    return (
        <>
            <TicketContainer>
                <TicketHolder style={{backgroundColor: props.colored, justifyContent: props.spacevalue}} >
                    <TextCenterer style={{color: props.textstyle, marginLeft: props.centererdistace + 'px'}}>
                        <TicketTitle style={{marginTop: props.titledistance + 'px'}}>{props.title}</TicketTitle>
                        <TicketSubTitle style={{width: props.fullsize + '%'}}>{props.subtitle}</TicketSubTitle>
                    </TextCenterer>
                        {props.field}
                        {props.clickeroriginal}
                        
                        {props.clicker}
                        
                </TicketHolder>
                
            </TicketContainer>
        </>
    )
}

export default GetTicket
