import styled from 'styled-components';
import {Button, Container} from '../GlobalStyle';
import './HeaderElements.css';
import bottomCircle from '../Images/bottomLeftCircle.jpg';
import LeftToTitle from '../Images/leftToTitle.jpg';
import RightToTitle from '../Images/rightToTitle.jpg';
import LeftCenter from '../Images/leftCenter.jpg';
import RightCenter from '../Images/rightCenter.jpg';
import TopRight from '../Images/topRightCircle.jpg';




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
z-index: 1;

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
z-index: 1;

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

export const LeftToTitleImage = styled.div`

background-image: url(${LeftToTitle});
width: 180px;
height: 250px;
position: absolute;
z-index: 0;
left: 30.5%;
top: 33%;

`;

export const RightToTitleImage = styled.div`

background-image: url(${RightToTitle});
position: absolute;
width: 270px;
height: 320px;
z-index: 0;
left: 60%;
top: 60%;

`;

export const LeftCenterImage = styled.div`
background-image: url(${LeftCenter});
position: absolute;
width: 220px;
height: 320px;
z-index: 0;
left: 0;
top: 15%;
`;

export const RightCenterImage = styled.div`
background-image: url(${RightCenter});
position: absolute;
width: 120px;
height: 270px;
z-index: 0;
right: 0;
top: 25%;
background-size: cover;

`;

export const TopCircle = styled.div`
    position: absolute;
     background-image: url(${TopRight});
     width: 350px;
     height: 180px;
     top: 0;
     left: 63%;
     border-bottom-right-radius: 350px;
     border-bottom-left-radius: 350px;
     z-index: 999;
     background-size: cover;
    
     
    
`;

export const TopCircleInner = styled.div`
 width: 230px;
 height: 130px;
 position: absolute;
 border-bottom-right-radius: 350px;
 border-bottom-left-radius: 350px;
 background-color: #121212;
top: 0;
 left: 66%;
 z-index: 999;
`;

export const TopBorderOuter = styled.div`

width: 200px;
 height: 200px;
 position: absolute;
 background-color: #121212;
 border: 2px solid #818c57;
 border-radius: 50%;
top: -20px;
 left: 20%;
 z-index: 999;
 

`;

export const TopBorderInner = styled.div`

width: 150px;
 height: 150px;
 position: absolute;
 background-color: #121212;
 border: 2px solid #818c57;
 border-radius: 50%;
top: 0;
 left: 21%;
 z-index: 999;
 

`;


export const TopBorderOuterBox = styled.div`

width: 110px;
 height: 200px;
 position: absolute;
 background-color: #121212;
top: 0px;
 left: 20%;
 z-index: 999;
 

`;

export const TopBorderInnerBox = styled.div`

width: 2px;
 height: 32.7px;
 position: absolute;
 background-color: #121212;
 border-right: 2px solid #818c57;
top: 146.8px;
 left: 25.67%;
 z-index: 999;
 

`;

export const BottomBorder = styled.div`
position: absolute;
width: 100px;
height: 165px;
background-color: transparent;
border: 2px solid #818c57;
border-bottom: none;
border-top-right-radius: 50px;
border-top-left-radius: 50px;
bottom: 17px;
right: 10%;
`;




