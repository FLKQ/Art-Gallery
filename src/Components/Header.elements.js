import styled from 'styled-components';
import {Button, Container} from '../GlobalStyle';
import './HeaderElements.css';
import bottomCircle from '../Images/bottomLeftCircle.jpg';



export const Head = styled.div`
font-family: 'Barlow Condensed', sans-serif;
height: 90vh;
background-color: #121212;


`;

export const HeaderContainer = styled(Container)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
height: 100%;


`;

export const HeaderTitle = styled.h1`
color : white;
font-size: 200px;
font-family: Duera;
max-height: 185px;

@media screen and (max-width: 812px){
    font-size: 100px;
    max-height: 100px;
}


`;

export const HeaderTitleBottom = styled.h1`
color : white;
font-size: 220px;
font-family: Duera;
margin-bottom: 40px;

@media screen and (max-width: 812px){
    font-size: 100px;
    margin-bottom: 25px;
}
`;

export const HeaderButtonHolder = styled.div`

`;

export const HeaderButton = styled(Button)`
background-color: #8a66ad;
border: 1px solid #8a66ad;
padding: 10px 60px;
color : black;
font-size: 25px;

&:hover{
    background-color: transparent;
    color: white;
}

@media screen and (max-width: 812px){
   margin-bottom: 60px;
}
`;

export const BottomCircle = styled.div`
    position: absolute;
     background-image: url(${bottomCircle});
     width: 350px;
     height: 180px;
     bottom: 17px;
     left: 15%;
     border-top-right-radius: 350px;
     border-top-left-radius: 350px;
    
     
    
`;

export const BottomCircleInner = styled.div`
 width: 230px;
 height: 130px;
 position: absolute;
 border-top-right-radius: 350px;
 border-top-left-radius: 350px;
 background-color: #121212;
 bottom: 17px;
 left: 18%;
 z-index: 100;
`;