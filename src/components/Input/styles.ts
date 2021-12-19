import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    height:32px ;
    margin: 5px 0;
`;

export const InputData = styled.input`
    width: 100%;
    height: 32px;
    padding: 6px;
    ::placeholder{
      color: var(--background-result);
      font-size: 10px;
    }
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



