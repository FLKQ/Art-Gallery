import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   
}



`;

export const Button = styled.button`
padding: ${({big}) => (big ? '15px 30px' : '18px 18px')};
color: ${({primary}) => (primary ? '#fff' : '#00000')};
background-color: ${({backgrounded}) => (backgrounded ? '#000000' : '#fff')};
border: ${({colored}) => (colored ? '1px solid #606060' : '1px solid #eceef0')};
border-radius: 5px;
cursor: pointer;

&:hover{
        background-color: #8a66ad;
        transition: all 0.5s ease;
}
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: ${({common}) => (common ? '1300px' : '100%')};
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
@media screen and (max-width: 991px){
    padding-right: 30px;
    padding-left: 30px;
}
`;

export default GlobalStyle

