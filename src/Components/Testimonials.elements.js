import styled from 'styled-components';
import {Container, Button} from '../GlobalStyle';
import './HeaderElements.css';



export const TestimonialsSection = styled.section`
color: black;
background-color: #e3f88f;
height: 100vh;
//display: flex;
//justify-content: center;



`;


export const TestimonialContainer = styled.div `
display: flex;
justify-content: center;
width: 100%; //77%


`;

export const TestimonialHolder = styled.div`
margin-top: 150px;
width: 77%;




`;

export const TestimonialsTextHolder = styled.div`
display: flex;
justify-content: space-between;
margin-top: 25px;
`;

export const TestimonialsTitle = styled.h1`
font-family: 'duera';
font-size: 70px;
`;

export const TestimonialsSubtext = styled.p`
font-size: 22px;
width: 30%;
`;

export const TestimonialsButton = styled(Button) `
border: 2px solid #8a66ad;
padding: 15px 60px 15px 60px;
font-size: 20px;
background-color: transparent;

`;

// ------------------------------------------------------------
export const RatingCardWrapper = styled.div`
display: flex;
margin-top: 100px;
justify-content: center;

`;

export const RatingCardSpreader = styled.div`
display:flex;
justify-content: space-between;
width: 77%;

`;


export const RatingCardContainer = styled.div`
display: flex;
justify-content: center;
padding: 0;
width: 650px;
height: 350px;

`;

export const RatingCardHolder = styled.div`
display:flex;
flex-direction: column;
justify-content: center;

background-color: #fff;
width: 650px;
height: 350px;
padding-left: 50px;

`;


export const RatingHolder = styled.div`
color: #8a66ad;
margin-bottom: 25px;
`;

export const RatingComment = styled.p`
font-size: 30px;
width: 80%;
margin-bottom: 25px;
`;

export const RatingPersonHolder = styled.div`
display: flex;
align-items:center;
`;

export const RatingPersonPhoto = styled.img`
width: 60px;
height: 60px;
object-fit: cover;
border-radius: 50%;
`;

export const RatingPersonInfoHolder = styled.div`
margin-left: 20px;
`;

export const RatingPersonName = styled.h1`
font-family: 'duera';
font-size: 35px;
`;

export const RatingPersonDate = styled.p`
color: #a5a6a6;
`;

