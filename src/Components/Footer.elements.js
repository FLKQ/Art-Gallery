import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterSection = styled.section`
height: 40vh;
background-color: #121212;
display: flex;
justify-content: center;
align-items: center;
`;

export const FooterContainer = styled.div`
width: 100%;

`;

export const FooterWrapper = styled.div`
display: flex;
justify-content: space-around;


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