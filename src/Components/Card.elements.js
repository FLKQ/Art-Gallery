import styled from 'styled-components';
import Mask from '../Images/nex.jpg';
import {FaCalendarAlt} from 'react-icons/fa';
import './HeaderElements.css';


export const CardContainer = styled.div`
`;

export const CardImageHolder = styled.div`
margin-top: 80px;

`;

export const CardImage = styled.img`
width: 400px;
height: 400px;
object-fit: cover;

@media screen and (max-width:376px){
    width: 300px;
};
`;

export const CardTextHolder = styled.div`

`;

export const CardType = styled.h2 `
margin: 20px 0px 20px 0px;
color: #b58ff8

`;

export const CardTitle = styled.h1 `
margin-bottom: 25px;
font-family: duera;
font-size: 33px;
width: 90%;

`

export const CardDateHolder = styled.div`
display: flex;
color: #a5a6a6;
`;

export const CardDateIcon = styled(FaCalendarAlt) `



`;

export const CardDateText = styled.p `
margin-left: 10px;
`;