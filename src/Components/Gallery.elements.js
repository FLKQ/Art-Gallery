import styled from 'styled-components';
import {Container, Button} from '../GlobalStyle';
import {Link} from 'react-router-dom';
import './HeaderElements.css';

export const ExhibitionSection = styled.section`
height: 155vh;
max-height: 215vh;
background-color: #121212;

@media screen and (max-width:1639px){
    height: 230vh;
    max-height: 550vh;
}

@media screen and (max-width:960px){
    height: 530vh;
    max-height: 550vh;
}

@media screen and (max-width: 376px){
    height: 600vh;
    max-height: 600vh;
}
`;

export const ExhibitionContainer = styled(Container)`
    width: 80%;

    @media screen and (max-width:960px){
    width: 88%;
}

@media screen and (max-width: 960px){
        width: 100%;
    
}
`;



export const ExhibitionTitle = styled.h1`
font-family: Duera;
font-size: 70px;
width: 20%;
color: #fff;
padding-top: 70px;
`;

export const SubTitle = styled.p`
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
    width: 70%;
    font-size: 30px;
};



`;



export const CardHolder = styled.div`
display: grid;
grid-template-columns: 510px 510px 500px;
grid-template-rows: 140px 140px 140px 140px 140px 140px 140px;




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

export const LoadMoreButton = styled(Button)`
padding: 10px 60px 6px 60px;
font-size: 20px;
color: #fff;

`;

export const GalleryImg = styled.img`
object-fit: cover;
`;





