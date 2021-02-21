import styled from 'styled-components';
import {Container, Button} from '../GlobalStyle';
import './HeaderElements.css';



export const TestimonialsSection = styled.section`
color: black;
background-color: #e3f88f;
height: 100vh;
//display: flex;
//justify-content: center;

@media screen and (max-width:960px){
    height: 175vh;
    
}

@media screen and (max-width:376px){
    height: 285vh;
    
}

`;


export const TestimonialContainer = styled.div `
display: flex;
justify-content: center;
width: 100%; //77%



`;

export const TestimonialHolder = styled.div`
margin-top: 150px;
width: 77%;

@media screen and (max-width:960px){
    display:flex;
flex-direction: column;
align-items: center;
    
}


`;

export const TestimonialsTextHolder = styled.div`
display: flex;
justify-content: space-between;
margin-top: 25px;

@media screen and (max-width:960px){
    display:flex;
flex-direction: column;
align-items: center;
    
}
`;

export const TestimonialsTitle = styled.h1`
font-family: 'duera';
font-size: 70px;
`;

export const TestimonialsSubtext = styled.p`
font-size: 22px;
width: 30%;

@media screen and (max-width:960px){
margin-bottom: 40px;
width: 25%;
    
}


@media screen and (max-width:960px){
margin-bottom: 40px;
width: 80%;
    
}
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

@media screen and (max-width:960px){
 
    
}
`;

export const RatingCardSpreader = styled.div`
display:flex;
justify-content: space-between;
width: 77%;

@media screen and (max-width:960px){
    display:flex;
flex-direction: column;
align-items: center;

    
}
`;


export const RatingCardContainer = styled.div`
display: flex;
justify-content: center;
padding: 0;
width: 650px;
height: 350px;

@media screen and (max-width:960px){
 margin-bottom: 50px;
    
}

@media screen and (max-width:376px){
 width: 320px;
 height: 650px;
    
}


`;

export const RatingCardHolder = styled.div`
display:flex;
flex-direction: column;
justify-content: center;

background-color: #fff;
width: 650px;
height: 350px;
padding-left: 50px;

@media screen and (max-width:376px){
 width: 320px;
 height: 650px;
    
}

`;


export const RatingHolder = styled.div`
color: #b895fa;
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

@media screen and (max-width:376px){
 margin-top:20px;
    
}
`;

export const RatingPersonInfoHolder = styled.div`
margin-left: 20px;

@media screen and (max-width:376px){
 margin-top:20px;
    
}
`;

export const RatingPersonName = styled.h1`
font-family: 'duera';
font-size: 35px;
`;

export const RatingPersonDate = styled.p`
color: #a5a6a6;
`;

