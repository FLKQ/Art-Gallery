import styled from 'styled-components';
import {Button} from '../GlobalStyle';
import './HeaderElements.css';

export const TicketContainer = styled.div`
height: 60vh;
display: flex;
justify-content: center;

`;

export const TicketHolder = styled.div`
display: flex;
align-items: center;
background-color: #121212;
color: #fff;
width: 78%;
height: 300px;
justify-content: space-around;
border-radius: 5px;

`;

export const TextCenterer = styled.div`


`;

export const TicketTitle = styled.h1`
font-family: duera;
font-size: 60px;
margin-bottom: 25px;

`;

export const TicketSubTitle = styled.p`
font-size: 22px;
width: 60%;

`;

export const TicketButton = styled(Button)`
padding: 20px 50px 20px 50px;
font-size: 20px;
background-color: #8a66ad;
border: none;

`;

export const RatingCardContainer = styled.div`

`;

export const RatingHolder = styled.div`
color: black;
`;

export const RatingComment = styled.p`

`;

export const RatingPersonHolder = styled.div`

`;

export const RatingPersonPhoto = styled.img`
width: 50px;
height: 50px;
object-fit: cover;
`;

export const RatingPersonInfoHolder = styled.div`

`;

export const RatingPersonName = styled.h1`

`;

export const RatingPersonDate = styled.p`

`;


