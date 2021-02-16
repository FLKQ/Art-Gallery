import styled from 'styled-components';
import {FaTheaterMasks,FaPalette,FaUniversity} from 'react-icons/fa';
import './HeaderElements.css';


export const WholeStatementHolder = styled.div`
width: 20%;

@media screen and (max-width:376px){
 width: 60%;
    
}
`;

export const StatementCardContainer = styled.div`


`;

export const IconTextHolder = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 25px;


`;

export const StatementIconMasks = styled(FaTheaterMasks)`
width: 30px;
height: 30px;




`;

export const IconHolder = styled.div`
background-color: #e3f88f;
border-radius: 50%;
width: 55px;
height: 55px;
display: flex;
justify-content: center;
align-items: center;
`;

export const StatementIconPalettee = styled(FaPalette)`
width: 30px;
height: 30px;


`;
export const StatementIconUniversity = styled(FaUniversity)`
width: 30px;
height: 30px;


`;

export const StatementTitle = styled.h1`
align-self: center;
margin-left: 15px;
font-family: duera;
font-size: 32px;

@media screen and (max-width: 376px){
    width: 100%;
    
}
`;

export const StatementTitleBottom = styled.h1`
align-self: center;
margin-left: 15px;
font-family: duera;
font-size: 32px;

`;

export const TitlesHolder = styled.div`
margin-top: 7px;
`;

export const StatementSubTitle = styled.p`
font-size: 20px;
color: #7c7b7d;


`;

