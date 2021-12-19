import styled from 'styled-components';

export const Container = styled.div`
    width: 276px;
    height: 430px;
    background-color: var(--background-result);
`;

export const Frame = styled.div`
    width: 276px;
    height: 29px;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px 4px 0 0 ;
  
`;
export const Title = styled.h1`
    font-size: 14px;
    color: #fff;
`;

export const Content = styled.div`
    display:block;
    justify-content: space-between;
    padding: 5px;
    margin-top: 20px; 

    svg{
        margin:20px 20px;
    }
`;
export const Students = styled.h1`
    font-size: 20px;
    text-align: center;
`;
