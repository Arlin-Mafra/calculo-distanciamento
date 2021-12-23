import styled from 'styled-components';

export const Container = styled.div`
    width: 276px;
    height: 430px;
    background-color: var(--background-result);
    display: flex;
    flex-direction: column;
    border: 1px solid;
   


    button{
        width: 40px;
        height: 20px;  
       
    }
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
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 5px;
    margin-top: 20px; 
`;
export const Students = styled.h1`
    font-size: 20px;
    text-align: center;
`;
export const Img = styled.img`
    width: 20px;
    height: 20px;
    margin: 0 20px;
`;
