import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterSection = styled.section`
height: 50vh;
background-color: #121212;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width:1650px){
 height: 56vh;
    
}

@media screen and (max-width: 430px){
    height: 97vh;
}


`;

export const FooterContainer = styled.div`
width: 100%;
justify-content: center;
width: 80%;
margin-top: 40px;
`;

export const FooterWrapper = styled.div`
display: flex;
justify-content: space-between;
height: 300px;
border-bottom: 2px solid #7c7b7d;

@media screen and (max-width: 960px){
    padding-top: 60px;
}


@media screen and (max-width: 430px){
    width:100%;
    height: 500px;
    
}


@media screen and (max-width: 430px){
    justify-content:center;
    flex-direction: column;
    align-self: flex-start;
    
    
} 


`;

export const FooterMenuHolder = styled.ul`

`;

export const FooterMenuItem = styled.li`
font-size: 22px;
margin-bottom: 8px;
list-style: none;
`;

export const FooterMenuLink = styled(Link)`                                                                                                                                                                                                                                                                                                                                                                                                                                         
text-decoration: none;
color: white;
`;

export const LinksHolder = styled.div`
display: flex;
flex-direction: row;

@media screen and (max-width: 430px){
    margin-top: 40px;
    width:50%;
    justify-content: space-around;
    margin-bottom: 35px;
    align-self: center;
}
`;

export const FooterCopyright = styled.h1 `
color: #7c7b7d;
font-size: 15px;

@media screen and (max-width: 430px){
    margin-top: 20px;
}
`;

export const FooterFadedBottomTextHolder = styled.div`
display: flex;
justify-content: space-between;
margin-top: 40px;

@media screen and (max-width: 430px){
    display: unset;
}
`;

export const MoreInfoHolder = styled.div`
display:flex;

@media screen and (max-width: 430px){
    width:100%;
    justify-content:center;
    align-items:center;
    margin-top: 25px;

}
`;

export const FooterTerms = styled(Link)`
text-decoration: none;
color: #fff;
padding-right: 60px;
font-size: 15px;
`;

export const FooterPolicy = styled(Link)`
text-decoration: none;
color: #fff;
font-size: 15px;
`;

export const FooterMenuWrapper = styled.div`
display:flex;
justify-content: space-between;
width: 30%;

@media screen and (max-width: 960px){
    width: 34%;
}

@media screen and (max-width: 430px){
    width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
    justify-content: space-around;

}
`;

export const FooterLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 3rem;
display: flex;
margin-left: 40px;
font-family: duera;

&:hover{
        color: #cc99ff;
        transition: all 0.5s ease;
}

@media screen and (){
    width:100%;
    
    
    

}
`;

export const FooterIcon = styled.h1`

`;
