import styled from 'styled-components';
import {Button} from '../GlobalStyle';
import './HeaderElements.css';

export const TicketContainer = styled.div`
height: 60vh;
display: flex;
justify-content: center;


@media screen and (max-width:960px){
    height: 85vh;
    margin-top: 8rem;
}
`;

export const TicketHolder = styled.div`
display: flex;
align-items: center;
background-color: #121212;
color: #fff;
width: 78%;
height: 300px;
justify-content: ${({spacestyle}) => (spacestyle ? 'space-between' : 'space-around')};  //space-around
border-radius: 5px;

@media screen and (max-width:960px){
    flex-direction: column;
    height: 620px;
    width: 500px;
    
}
@media screen and (max-width: 376px){
    width: 325px;
    height: 620px;
}

`;

export const TextCenterer = styled.div`



@media screen and (max-width:960px){
    display:flex;
flex-direction: column;
align-items: center;
    
}


`;

export const TicketTitle = styled.h1`
font-family: duera;
font-size: 60px;
margin-bottom: 25px;


`;

export const TicketSubTitle = styled.p`
font-size: 22px;
width: 60%;

@media screen and (max-width:960px){
width: 40%;
    
}
`;

export const TicketButton = styled(Button)`
padding: 20px 50px 20px 50px;
font-size: 20px;
background-color: #8a66ad;
border: none;

`;




