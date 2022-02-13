import { useDispatch } from 'react-redux';
import styled from 'styled-components';

type ButtonProps = {
    width?: number,
    height?: number,
    radius?: number,
    color?: string,
    Backgroud?: string,
    fontSize?: number,
    fontStyle?: '100' | 'bold' | 'bolder'
}

export const Button = styled.button<ButtonProps>`
    width: ${(props) => props.width}px; || 120px;
    height: ${(props) => props.height}px; || 40px;
    border: none;
    border-radius: 5px;
    padding: 3px;
    text-align: center;
    margin: 0 3px;
    background-color: ${(props) => props.Backgroud}; || transparent;    
    color: ${(props) => props.color}; || blue;
    font-size: 16px;
    font-weight: ${(props) => props.fontStyle}; || bold;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
        background-color: transparent;
        border: 2px solid ${(props) => props.Backgroud};
        color: ${(props) => props.Backgroud};
    }
  }
`;

export const Table = styled.table`
    overflow-y: auto;
`;

export const Page = styled.div`
    display: flex;
    overflow-y: auto;
`;