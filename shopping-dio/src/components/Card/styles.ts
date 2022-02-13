import styled from "styled-components"

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 250px;
    border: 1px solid gray;
    border-radius: 8px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`

export const CardImage = styled.img`
    width: 90%;
    height: 90%;
    object-fit: cover;
    max-height: 140px;
    border: 1px solid gray;
    border-radius: 8px;
`

export const CardTitle = styled.h2`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`

export const CardPrice = styled.p`
   font-size: 16px;
`

export const Button = styled.button`
    width: 90%;
    border: 1px solid transparent;

    border-radius: 5px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    padding: 3px;
    margin: 0 3px;
    font-size: 16px;
    font-weight: bold;
    transition: 0.3s;
    
    &:hover {
        color: #fff;
        background: #451245;
        border: 1px solid black;
  }
`;