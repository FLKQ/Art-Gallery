import styled from 'styled-components';

export const ContactUsSection = styled.section`
height: 92vh;
background-color: #121212;
color: white;
`;

export const ContactUsContainer = styled.div`
display: flex;
justify-content: space-between; 

`;

export const ContactUsWrapper = styled.div`
display:flex;
`;

export const ContactUsInfoWrapper = styled.div`
padding-left: 13rem;
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
`;

