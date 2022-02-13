import styled from 'styled-components';

export const CardMessage = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    height: 150px;
    margin-bottom: 10px;
    border: 1px solid gray;
    border-radius: 8px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

export const Dados = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 0 10px;
    width: 70vw;
    height: 100%;
`;

export const Options = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    width: 30vw;
    height:100%;

    @media only screen and (max-width: 500px) {
        flex-direction: column;
    }
`;

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

    @media only screen and (max-width: 500px) {
        width: 35px;
        height: 35px;
        span{
            display:none
        }
    }
  
`;

export const Footer = styled.div`
    width: 90vw;
    height: 30px;
    border: 1px solid transparent;
`;

export const Confirm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 200px;
    background-color: ;
    color: #550505;
    text-align: center
`

export const Space = styled.div<ButtonProps>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    border: 1px solid transparent;
`;

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: start;
    width: 90vw;
    height: 130px;
    margin-bottom: 10px;
    padding: 8px 0;
    border: 2px solid #452525;
    border-radius: 8px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    width: 70vw;
    height: 100%;
`;

export const InputEmail = styled.input`
    height: 35px;
    width: 100%;
    padding: 0 5px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`
export const InputMessge = styled.textarea`
    width: 100%;
    padding: 0 5px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`
