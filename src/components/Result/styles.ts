import styled from 'styled-components';

export const Container = styled.div`
    width: 254px;
    height: 595px;
    background-color: var(--background-result);
`;

export const ResultWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding:25px ;
`;
export const  TitleWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   width: 40px;
`;
export const  ResultTitle = styled.strong`
    font-size: 14px;
`;
export const  Amount = styled.strong`
    font-size: 14px;
`;

