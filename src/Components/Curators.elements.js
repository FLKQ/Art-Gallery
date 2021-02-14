import styled from 'styled-components';
import {Container,Button} from '../GlobalStyle';
import './HeaderElements.css';

export const CuratorsContainer = styled(Container)`
height: 90vh;
display:flex;
justify-content: center;


`;

export const CuratorsHolder = styled.div`
width: 85%;

`;

export const CuratorsTitle = styled.h1`
text-align:center;
font-family: duera;
font-size: 60px;
`;

export const CuratorsSubtextTop = styled.p`
text-align:center;
font-size: 22px;
margin-top: 25px;
`;

export const CuratorsSubtextBot = styled.p`
text-align:center;
font-size: 22px;
margin-top: 5px;
`;

export const CuratorsPhotosHolder = styled.div`
display: flex;
justify-content: space-around;

@media screen and (max-width:960px){
    display:flex;
flex-direction: column;
align-items: center;
    
}
`;

export const AllCuratorsButton = styled(Button)`
padding: 10px 60px 6px 60px;
font-size: 20px;
`;

export const AllCuratorsButtonHolder = styled.div`
text-align: center;
margin-top: 25px;
`;





