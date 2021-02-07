import styled from 'styled-components';
import {Container,Button} from '../GlobalStyle';
import './HeaderElements.css';
import {FaClock} from 'react-icons/fa';

export const EventSection = styled.section`
height: 130vh;
max-height: 150vh;
background-color: #e3f88f;

`;


export const EventContainer = styled(Container)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const EventTitle = styled.h1`
font-family: duera;
font-size: 70px;
padding-top: ${({zero}) => (zero ? '0px' : '100px')};
padding-bottom: ${({nopaddingbot}) => (nopaddingbot ? '0px' : '40px')};
`;

export const EventSubtitle = styled.p`
font-size: 23px;
padding-bottom: 40px;


`;

export const VerticalCardHolder = styled.div`
width: 1500px;
height: 200px;
background-color: #fff;
margin-bottom: 20px;


@media screen and (max-width: 960px){
    width: 500px;
    height: 570px;
}
`;

export const VerticalCardContainer = styled.div`
display: flex;
align-items: center;

@media screen and (max-width: 960px){
    flex-direction: column;
}
`;

export const VerticalCardDate = styled.h1`
font-size: 100px;
font-family: duera;
padding-left: 55px;

@media screen and (max-width: 960px){
    padding: 0;
}
`;

export const VerticalCardMonth = styled.h1`
font-size: 30px;
margin-bottom: 25px;
font-family: duera;
`

export const VerticalCardDay = styled.p`
font-size: 22px;
color: #a5a6a6;
`

export const ColumnTextHolder = styled.div`
padding-left: 20px;

@media screen and (max-width: 960px){
    padding: 0;
}
`;

export const VerticalCardImage = styled.img`
width: 250px;
height: 150px;
margin-left: 100px;
margin-right: 20px;
margin-top: 23px;
object-fit: cover;

@media screen and (max-width: 960px){
    width: 350px;
    height: 200px;
    margin: 0;
    border-radius: 10px;
}

`;

export const ClockIcon = styled(FaClock)`
margin-right: 10px;
color: #a5a6a6;
margin-top: 5px;
`;

export const TimeHolder = styled.div`
display: flex;

@media screen and (max-width: 960px){
   justify-content: center;
}
`;

export const ReadMoreButton = styled(Button)`
padding: 10px 60px 6px 60px;
font-size: 20px;
margin-left: ${({noMargin}) => (noMargin ? "0px" : "23rem")};
background-color: ${({standart}) => (standart ? "#8a66ad" : "#fff")};
margin-top: ${({hugeTopMargin}) => (hugeTopMargin ? "5rem" : "0px")};

@media screen and (max-width: 960px){
    margin-left: 0;
    margin-top: 25px;
}
`;



