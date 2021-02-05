import styled from 'styled-components';
import {Container, Button} from '../GlobalStyle';
import {Link} from 'react-router-dom';
import './HeaderElements.css';

export const ExhibitionSection = styled.section`
height: 180vh;
max-height: 180vh;
background-color: #fff;
`;

export const ExhibitionContainer = styled(Container)`
    width: 80%;
`;

export const NavigationHolder = styled.div`


`;

export const ExhibitionTitle = styled.h1`
font-family: Duera;
font-size: 70px;
margin-top: 100px;
width: 20%;
`;

export const SubTitle = styled.p`
font-family: "Times New Roman";
font-size: 23px;
margin-top: 45px;
width: 35%;

`;

export const NavigationMenu = styled.ul`
display: flex;
justify-content: space-between;
width: 40%;
font-size: 20px;
margin-top: 45px;
border-bottom: 2px solid #a5a6a6;


font-family: "Times New Roman";
list-style: none;

`;

export const NavigationItem = styled.li`
margin-bottom: 10px;
`;

export const NavigationLinks = styled(Link)`
text-decoration: none;
color : #a5a6a6;
cursor: pointer;

`;

export const CardHolder = styled.div`
display: grid;
`;


