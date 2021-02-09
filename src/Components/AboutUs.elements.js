import styled from 'styled-components';
import './HeaderElements.css';
import {Container, Button} from '../GlobalStyle';
import {FaPlay} from 'react-icons/fa';
import {Link} from 'react-router-dom';


export const AboutUsSection = styled.section`
height: 180vh;
max-height: 220vh;
background-color: #fff;

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
`;

export const AboutUsImageHolder = styled.div`

`;

export const AboutUsImage = styled.img`
width: 550px;
height: 500px;
object-fit: cover;
border: 2px solid black;
padding: 30px;
`;

export const AboutUsColumnTextHolder = styled.div`
text-align: center;
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
background-color: #8a66ad;


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
`;

export const VideoPlayButton = styled.div`
position:relative;
display: flex;
width: 300px;
height: 300px;
border-radius: 50%;
background-color: #8a66ad;
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
