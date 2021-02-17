import styled from 'styled-components';
import {Container, Button} from '../GlobalStyle';
import {Link} from 'react-router-dom';
import './HeaderElements.css';

export const ExhibitionSection = styled.section`
height: 200vh;
max-height: 215vh;
background-color: #fff;

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

export const NavigationHolder = styled.div`


`;

export const ExhibitionTitle = styled.h1`
font-family: Duera;
font-size: 70px;
margin-top: 100px;
width: 20%;
`;

export const SubTitle = styled.p`
font-family: "Times New Roman";
font-size: 23px;
margin-top: 45px;
width: 35%;

@media screen and (max-width:1330px){
    width: 70%;
    font-size: 30px;
};

@media screen and (max-width:960px){
    width: 70%;
    font-size: 30px;
};



`;

export const NavigationMenu = styled.ul`
display: flex;
justify-content: space-between;
width: 40%;
font-size: 20px;
margin-top: 45px;
border-bottom: 2px solid #7c7b7d;


font-family: "Times New Roman";
list-style: none;

@media screen and (max-width: 1330px){
    width: 60%;
}

@media screen and (max-width: 960px){
    width: 80%;
    white-space: nowrap;
    
}
`;

export const NavigationItem = styled.li`
margin-bottom: 20px;

@media screen and (max-width: 960px){
        margin-right: 10px;
    
}
`;

export const NavigationLinks = styled(Link)`
text-decoration: none;
color : #7c7b7d;
cursor: pointer;

`;

export const CardHolder = styled.div`
display: grid;
grid-template-columns: auto auto auto;
grid-template-rows: auto auto;

@media screen and (max-width:1330px){
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto auto ;
}

@media screen and (max-width:960px){
    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto auto auto;
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

export const LoadMoreButton = styled(Button)`
padding: 10px 60px 6px 60px;
font-size: 20px;

`;

export const FirstCard = styled.div`

`;

export const SecondCard = styled.div`

`;

export const ThirdCard = styled.div`

`;

export const FourthCard = styled.div`

`;

export const FifthCard = styled.div`

`;

export const SixthCard = styled.div`

`;


