import styled from "styled-components";


export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 100px;
`;

export const InputDatas = styled.div`
  width: 270px;
  display: block;
  justify-content: center;
`;
export const Info = styled.h2`
  color: #000000;
  font-size: 16px;
`;

export const ButtonLoad = styled.button`
  width: 226px;
  height: 52px;
  border-radius: 4px;
  background-color: var(--button);
  color:#ffffff;
  font-size: 14px;
  margin-top: 20px;

  :hover{
    background-color: var(--button-ligth);
  }
`;

export const InputWrraper = styled.div`
  margin-top: 20px;
  display: block;
`;
export const InputTitle = styled.h1`
  font-size: 14px;
  margin-bottom:10px;  
`;
export const InputInfo = styled.h2`
  font-size: 10px;
  color: var(--background-result);

`;
export const DistanceWrapper = styled.div`
  display: block;
  margin-top: 20px;
`;
export const DistanceTitle = styled.h1`
  font-size: 14px;
`;

export const DistanceInfo = styled.div`
  font-size:10px;
  color:var(--background-result);
`;

export const Lousa = styled.div`
  width: 270px;
  background-color: blue;
  display: flex;
  justify-content: center;
`;

export const Results = styled.div`
  width: 270px;
  background-color: blue;
  display: flex;
  justify-content: center;
`;



