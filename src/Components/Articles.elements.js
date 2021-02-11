import styled from 'styled-components';
import ArticlesMain from '../Images/ArticlesMain.jpg'


export const ArticlesSection = styled.section`
height: 100vh;
background-color: #fff;

`;

export const ArticlesContainer = styled.div`
display: flex;
justify-content: center;
`;

export const ArticlesWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

`;

export const ArticlesTitle = styled.h1`
font-family: 'duera';
font-size: 70px;
margin-top: 100px;
margin-bottom: 50px;

`;

export const ArticlesSubtext = styled.p`

font-size: 22px;
`;

export const ImageContainer = styled.div`
display:flex;
justify-content: center;
margin-top: 100px;


`;

export const ImageContainerCenterer = styled.div`
display: flex;
justify-content: space-between;
width: 77%;

`;

export const ArticlesImagesWrapper = styled.div`
position:relative;
width: 900px;
height: 491px;
background-image: url(${ArticlesMain});
background-size: cover;
border-radius: 5px;
`;

export const ArticlesImageSide = styled.img`
width: 200px;
height: 150px;
object-fit: cover;
border-radius: 5px;
margin-left: 20px;

`;

export const SideCardWrapper = styled.div`

`;

export const SideCardHolder = styled.div`
display: flex;
`;
// ArticleCard---------------------------------------------------


export const ImageInsideText = styled.div`
background-color: #fff;
height: 170px;
position: ${({inside}) => (inside ? "absolute" : "")};
bottom: 0;

`;


export const ImageInsideTypeDateHolder = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
margin-top: 20px;
`;

export const ImageInsideType = styled.h1`
color: #8a66ad;
`;

export const ImageInsideDate = styled.p`
color: #a5a6a6;
margin-left: 20px;
`;

export const ImageInsideSubtext = styled.p`
font-family: duera;
font-size: 30px;
width: 60%;
`;
