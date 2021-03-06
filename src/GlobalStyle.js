import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
   
}


html,body
{
    @media screen and (max-width: 430px) {
    width: 100%;
    margin: 0 ;
    padding: 0px;
    overflow-x: hidden; 
    };
    
    @media only screen 
    and (device-width: 375px) 
    and (device-height: 812px) {
    width: 100%;
    margin: 0 ;
    padding: 0px;
    overflow-x: hidden; 

    }
}




`;

export const Button = styled.button`
padding: ${({big}) => (big ? '13px 45px' : '18px 18px')};
color: ${({primary}) => (primary ? '#fff' : '#00000')};
background-color: ${({backgrounded}) => (backgrounded ? '#000000' : 'transparent')};
border: ${({colored}) => (colored ? '1px solid #606060' : '1px solid #eceef0')};
border-radius: 5px;
cursor: pointer;
font-family: 'Barlow Condensed', sans-serif;
font-weight: 600;

&:hover{
        background-color: ${({whitened}) => (whitened ? "#fff" : "#8a66ad")};
        transition: all 0.5s ease;
        color: black;
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

