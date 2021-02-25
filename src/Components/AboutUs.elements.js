import styled from 'styled-components';
import './HeaderElements.css';
import {Container, Button} from '../GlobalStyle';
import {FaPlay} from 'react-icons/fa';
import {Link} from 'react-router-dom';


export const AboutUsSection = styled.section`
height: 415vh; //415
max-height: 500vh;
background-color: #fff;

@media screen and (max-width:1650px){
    height: 440vh; //415
max-height: 850vh;
};

@media screen and (max-width:960px){
    height: 800vh; //415
max-height: 850vh;
};

@media screen and (max-width:430px){
    height: 855vh; //415
max-height: 1050vh;
};

@media screen and (max-width: 385px){
    height: 940vh;
};

@media only screen 
    and (device-width: 375px) 
    and (device-height: 812px) {
       height: 1015px;

    }

`;

export const AboutUsContainer = styled(Container)`
display: flex;
width: 76%;
`;

export const AboutUsImageTextConnecter = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding-top: 15rem;
align-items: center;

@media screen and (max-width:960px){
    flex-direction: column;
}
`;

export const AboutUsImageHolder = styled.div`

`;

export const AboutUsImage = styled.img`
width: 550px;
height: 500px;
object-fit: cover;
border: 2px solid black;
padding: 30px;

@media screen and (max-width:430px){
 width: 345px;
    
}
`;

export const AboutUsColumnTextHolder = styled.div`
text-align: center;


@media screen and (max-width:960px){
    margin-top: 8rem;
}
`;

export const AboutUsTitle = styled.h1`
font-family: Duera;
font-size: 70px;

`;
export const AboutUsTitleMid = styled.h1`
font-family: Duera;
font-size: 70px;

`;
export const AboutUsTitleBot = styled.h1`
font-family: Duera;
font-size: 70px;
margin-bottom: 30px;


`;

export const AboutUsSubTitle = styled.p`
font-size: 23px;

`;
export const AboutUsSubTitleBot = styled.p`
font-size: 23px;
margin-bottom: 40px;
`;

export const AboutUsButton = styled(Button)`
padding: 10px 60px 6px 60px;
font-size: 20px;
background-color: #b895fa;


`;

export const DigitsHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const ColumnDigitsHolder = styled.div`
padding-left: 20px;
`;

export const DigitTitle = styled.h1`
font-size: 100px;
font-family: duera;
align-self: center;
`;

export const DigitSubtitle = styled.p`
font-size: 22px;
color: #a5a6a6;
margin-bottom: 10px;
`;

export const RandomDiv = styled.div`
padding-top: 15rem;
display: flex;
justify-content: space-between;
margin: 0 auto;
width: 70%;


@media screen and (max-width:960px){
    flex-direction: column;
}
`;

export const VideoPreviewHolder = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
height: 110vh;
background-color: #fff;
`;

export const VideoPreview = styled.img`
position: absolute;
width: 1500px;
height: 600px;
object-fit: cover;
border-radius: 5px;

@media screen and (max-width:1650px){
 width: 1300px;
    
}

@media screen and (max-width:960px){
    width: 800px;
    height: 700px;
}

@media screen and (max-width:430px){
 width: 345px;
    
}


`;

export const VideoPlayButton = styled.div`
position:relative;
display: flex;
width: 300px;
height: 300px;
border-radius: 50%;
background-color: #b895fa;
align-items: center;
justify-content: center;
`;

export const VideoPlayButtonIcon = styled(FaPlay)`
position: absolute;
width: 30px;
height: 30px;
color: black;
`;

export const VideoPlayButtonLink = styled.a`
text-decoration: none;
`;

export const AboutUsStatementHolder = styled.div`
height: 40vh;
display: flex;

justify-content: center;

@media screen and (max-width:960px){
    justify-content: center;
    height: 90vh;
}
@media screen and (max-width:430px){
 height: 120vh;
   
}



`;

export const AbousUsStatementCenterer = styled.div`
display: flex;
justify-content: space-between;
width: 78%;

@media screen and (max-width:960px){
    flex-direction: column;
    align-items:center;
    width: 100%;
}

@media screen and (max-width:430px){
 justify-content: space-around;
    
}
`;
