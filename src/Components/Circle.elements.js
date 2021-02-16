import styled from 'styled-components';



export const Circles = styled.div`
position: absolute;
left:${({lefted}) => (lefted ? "0px" : "-5%")};
top: 60%;
@media screen and (max-width: 960px){
   left: -7%;
}

`;

export const Circle = styled.div`
border-radius: 50%;
  background: transparent;
  border: 2px solid #818c57;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px){
    width: 130px;
  height: 130px;
}

`;

export const Circle2 = styled.div`
width: 150px;
  height: 150px;
  border-radius: 50%;
  background: transparent;
  border: 2px solid #818c57;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px){
    width: 80px;
  height: 80px;
}

`;

export const Circle3 = styled.div`
width: 80px;
  height: 80px;
  border-radius: 50%;
  background: transparent;
  border: 2px solid #818c57;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px){
    width: 40px;
  height: 40px;
}


`;

