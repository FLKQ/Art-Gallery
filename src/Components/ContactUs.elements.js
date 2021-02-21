import styled from 'styled-components';
import {Button} from '../GlobalStyle';

export const ContactUsSection = styled.section`
height: 92vh;
background-color: #121212;
color: white;

@media screen and (max-width: 400px){
    height: 180vh;
}
`;

export const ContactUsContainer = styled.div`
display: flex;
justify-content: space-between;



`;

export const ContactUsWrapper = styled.div`
display:flex;

@media screen and (max-width: 400px){
    flex-direction:column;
    align-items: center;
    
}
`;

export const ContactUsInfoWrapper = styled.div`
padding-left: 13rem;

@media screen and (max-width: 400px){
    align-items:center;
    padding-left: 4rem;
    
    
}
`;

export const ContactUsTitle = styled.h1`
font-family: 'duera';
font-size: 70px;
padding-top: 100px;
margin-bottom: 20px;
`;

export const ContactUsSubtitle = styled.p`
margin-bottom: 20px;
font-size: 22px;
width: 65%;

@media screen and (max-width: 400px){
    margin-bottom: 30px;
    
}
`;

export const ContactUsMap = styled.img`
height: 890px;
width: 1000px;
object-fit: cover;

@media screen and (max-width:960px){
width: 300px;
height: 500px;
align-self: center;
margin-right: 50px;
    
}

@media screen and (max-width: 400px){
    border-radius: 10px;
    width: 320px;
    align-items: center;
    margin-right: 0;
    margin-top: 75px;
}
`;

export const ContactBuyTicketButton = styled(Button)`
padding: 20px 50px 20px 50px;
font-size: 20px;
background-color: #b895fa;
border: none;
margin-top: 20px;

@media screen and (max-width: 400px){
    margin-left: 45px;
    margin-top: 40px;
    
}

`;

