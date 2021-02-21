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



@media screen and (max-width: 960px){
    font-size: 125px;
    max-height: 100px;
    margin-bottom: 25px;
}


`;

export const HeaderTitleBottom = styled.h1`
color : white;
font-size: 220px;
font-family: Duera;
margin-bottom: 40px;
z-index: 1;

@media screen and (max-width: 960px){
    font-size: 140px;
    margin-bottom: 25px;
}
`;

export const HeaderButtonHolder = styled.div`

`;

export const HeaderButton = styled(Button)`
background-color: #b895fa;
border: 1px solid #b895fa;
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
     
    
     @media screen and (max-width: 960px){
    width: 250px;
    height: 130px;
    left: -10%;
    bottom: 10px;
}  

@media screen and (max-width: 400px){
    width: 230px;
    height: 110px;
    left: -18%;
    bottom: 10px;
} 
    
`;

export const BottomCircleInner = styled.div`
 width: 230px;
 height: 130px;
 position: absolute;
 border-top-right-radius: 350px;
 border-top-left-radius: 350px;
 background-color: #121212;
 bottom: 17px;
 left: 17%;
 z-index: 100;
 

 @media screen and (max-width: 960px){
    width: 180px;
    height: 85px;
    left: -7%;
    bottom: 10px;

}

@media screen and (max-width: 400px){
    width: 170px;
    height: 80px;
    left: -11%;
    bottom: 10px;

}
`;

export const LeftToTitleImage = styled.div`

background-image: url(${LeftToTitle});
width: 180px;
height: 250px;
position: absolute;
z-index: 0;
left: 30.5%;
top: 33%;
 // eto esli 4e ybratb

@media screen and (max-width: 960px){
    width: 100px;
    height: 150px;
    top: 41%;
    left: 24%;

}

@media screen and (max-width: 400px){
    width: 100px;
    height: 150px;
    top: 41%;
    left: 24%;

}

`;

export const RightToTitleImage = styled.div`

background-image: url(${RightToTitle});
position: absolute;
width: 270px;
height: 320px;
z-index: 0;
left: 60%;
top: 60%;


@media screen and (max-width: 960px){
    height: 160px;
    width: 150px;
    top:78%;
}

@media screen and (max-width: 400px){
    height: 115px;
    width: 110px;
    top:78%;
}

`;

export const LeftCenterImage = styled.div`
background-image: url(${LeftCenter});
position: absolute;
width: 220px;
height: 320px;
z-index: 0;
left: 0;
top: 15%;


@media screen and (max-width: 960px){
    width: 150px;
    height: 250px;
}

@media screen and (max-width: 400px){
    width: 90px;
    height: 180px;
}
`;

export const RightCenterImage = styled.div`
background-image: url(${RightCenter});
position: absolute;
width: 120px;
height: 270px;
z-index: 0;
right: 6.5%;
top: 25%;
background-size: cover;


@media screen and (max-width: 960px){
    height: 150px;
    width: 70px;
}

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

    
 @media screen and (max-width: 960px){
    width: 250px;
    height: 130px;
    left: 50%;
}

@media screen and (max-width: 400px){
    display: none;

}

     
    
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


 @media screen and (max-width: 960px){
    width: 180px;
    height: 80px;
    left: 54%;

}
@media screen and (max-width: 400px){
    display: none;

}
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


 @media screen and (max-width: 960px){
    display: none;
}
 

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

 
 @media screen and (max-width: 960px){
    display: none;
}
`;


export const TopBorderOuterBox = styled.div`

width: 110px;
 height: 200px;
 position: absolute;
 background-color: #121212;
top: 0px;
 left: 20%;
 z-index: 999;

 
 @media screen and (max-width: 960px){
    display: none;
}
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

 
 @media screen and (max-width: 960px){
    display: none;
}
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


@media screen and (max-width: 960px){
    height: 60px;
    width: 50px;
    bottom: 10px;
}
`;




