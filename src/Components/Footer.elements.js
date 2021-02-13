import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterSection = styled.section`
height: 50vh;
background-color: #121212;
display: flex;
justify-content: center;
align-items: center;
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
border-bottom: 2px solid #444545;





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
`;

export const FooterCopyright = styled.h1 `
color: #444545;
font-size: 15px;
`;

export const FooterFadedBottomTextHolder = styled.div`
display: flex;
justify-content: space-between;
margin-top: 40px;
`;

export const MoreInfoHolder = styled.div`
display:flex;


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
