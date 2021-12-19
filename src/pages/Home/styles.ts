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
export const InputDataWrapper = styled.div`
  border: 1px solid;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99px;
  height:32px ;

  margin-bottom: 5px;
`;
export const InputData = styled.input`
  width: 100%;
  height: 32px;
  padding: 10px;
`;

export const InputLabelWrapper = styled.div`
  background-color: var(--background-result);
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InputLabel = styled.h1`
  font-size: 14px;
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
export const DistanceInputWrapper = styled.div`
  width: 238px;
  height: 32px;
  border:1px solid;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;
export const DistanceInput = styled.input`
  padding: 10px;
  height: 32px;
  width:100%;
`;
export const DistanceLabelWrapper = styled.div`
  background-color: var(--background-result);
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DistanceLabel = styled.div`
  font-size:14px;
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



