import styled from 'styled-components';
import ArticlesMain from '../Images/ArticlesMain.jpg'


export const ArticlesSection = styled.section`
height: 160vh; //160
background-color: #fff;

@media screen and (max-width:960px){
 height: 480vh; //480
    
}

@media screen and (max-width:400px){
 height: 600vh; //480
    
}
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

@media screen and (max-width:400px){
  width:80%;
    
}
`;

export const ImageContainer = styled.div`
display:flex;
justify-content: center;
margin-top: 100px;

@media screen and (max-width:960px){
    display:flex;
flex-direction: column;
align-items: center;
    
}

`;

export const ImageContainerCenterer = styled.div`
display: flex;
justify-content: space-between;
width: 77%;

@media screen and (max-width:960px){
    display:flex;
flex-direction: column;
align-items: center;
    
}
`;

export const ArticlesImagesWrapper = styled.div`
position:relative;
width: 1000px;
height: 491px;
background-image: url(${ArticlesMain});
background-size: cover;
border-radius: 5px;

@media screen and (max-width:960px){
width: 800px;
height: 600px;
margin-bottom: 50px;
}

@media screen and (max-width:400px){
width: 320px;
height: 600px;
background-size: fill;
}
`;

export const ArticlesImageSide = styled.img`
width: 200px;
height: 150px;
object-fit: cover;
border-radius: 5px;
margin-left: 20px;

@media screen and (max-width:960px){
width: 800px;
height: 600px;
    
}

@media screen and (max-width:400px){
width: 320px;
height: 600px;
margin-left:0;
    
}

`;

export const SideCardWrapper = styled.div`

`;

export const SideCardHolder = styled.div`
display: flex;

@media screen and (max-width:960px){
display:flex;
flex-direction: column;
margin-bottom: 30px;

    
}
`;

export const NewsletterCardInput = styled.input`
margin-left: 15rem;

@media screen and (max-width:960px){
 margin-left: 0;
 padding: 20px 80px 20px 30px;   
}

@media screen and (max-width:400px){
  padding: 20px 15px 20px 15px;
    
}
`;

export const GetTicketWrapper = styled.div`
margin-top: 170px;
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
color: #b895fa;
`;

export const ImageInsideDate = styled.p`
color: #7c7b7d;
margin-left: 20px;
`;

export const ImageInsideSubtext = styled.p`
font-family: duera;
font-size: 30px;
width: ${({fullsize}) => (fullsize ? '100%' : '60%')};
`;

export const GetTicketButton = styled.button`
padding: 20px 50px 20px 50px;
font-size: 20px;
background-color: #b895fa;
border: none;
margin-right: 150px;
border-radius: 5px;

@media screen and (max-width:960px){
  margin-right: 0;
    
}

`;
