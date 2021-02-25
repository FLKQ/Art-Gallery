import styled from 'styled-components';
import {Container, Button} from '../GlobalStyle';
import {Link} from 'react-router-dom';
import './HeaderElements.css';

export const GallerySection = styled.section`
height: 155vh;
max-height: 215vh;
background-color: #121212;

@media screen and (max-width:1639px){
    height: 195vh;
    max-height: 550vh;
}

@media screen and (max-width:960px){
    height: 370vh;
    max-height: 550vh;
}

@media screen and (max-width: 430px){
    height: 390vh;
    max-height: 600vh;
}

@media screen and (max-width: 385px){
    height: 460vh;
}

@media only screen 
    and (device-width: 375px) 
    and (device-height: 812px) {
        height: 540vh;

    }
`;

export const GalleryContainer = styled(Container)`
    width: 80%;

    @media screen and (max-width:960px){
    width: 88%;
}

@media screen and (max-width: 960px){
        width: 100%;
    
}
`;



export const GalleryTitle = styled.h1`
font-family: Duera;
font-size: 70px;
width: 20%;
color: #fff;
padding-top: 70px;

@media screen and (max-width: 960px){
    width: 40%;
}
`;

export const GallerySubTitle = styled.p`
font-family: "Times New Roman";
font-size: 23px;
margin-top: 45px;
margin-bottom: 45px;
width: 35%;
color: #fff;

@media screen and (max-width:1330px){
    width: 70%;
    font-size: 30px;
};

@media screen and (max-width:960px){
    width: 90%;
    font-size: 30px;
};



`;



export const CardHolder = styled.div`
display: grid;
grid-template-columns: 485px 485px 485px;
grid-template-rows: 140px 140px 140px 140px 140px 140px 140px;


@media screen and (max-width:1650px){
grid-template-columns: 410px 410px 400px;
grid-template-rows: 140px 140px 140px 140px 140px 140px 140px;

    
}

@media screen and (max-width: 960px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


`;


export const ButtonHolder = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    padding-top: 50px;
    padding-bottom: 50px;

@media screen and (max-width: 960px){
    padding-top: 60px;
    padding-bottom: 60px;
}
`;

export const ExploreMoreButton = styled(Button)`
padding: 10px 60px 6px 60px;
font-size: 20px;
color: #fff;

`;

export const GalleryImg = styled.img`
width: 450px;

@media screen and (max-width:1650px){
 width: 400px;
    
}

@media screen and (max-width: 960px){
    margin-bottom: 20px;
    width: 450px;
}

@media screen and (max-width: 430px){
    width: 375px; //376
}

`;





