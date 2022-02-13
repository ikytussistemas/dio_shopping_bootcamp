import styled from 'styled-components';

export const CardUser = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    height: 100px;
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
  }

`;

export const Footer = styled.div`
    width: 90vw;
    height: 40px;
    
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
    height: 10px;
    border: 1px solid transparent;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  width: 400px;
  height: 250px;
  padding: 10px;
  background-color: #504d4d;
  color: #fff;
`;

export const Label = styled.label`
  margin-right: 10px;
  color: #fdfdfd;
`;

export const Input = styled.input`
  max-width: 150px;
  padding: 0 10px;
  margin: 10px 5px;
`;

export const BtnAction = styled.button<{backgroud:string, color:string}>`
  width: 90%;
  height: 45px;
  margin: 10px auto;
  background-color: ${(props) => props.backgroud};
  color:${(props) => props.color};
  border: 3px solid #fff;
  border-radius: 8px;
  transition: 0.3s;

  &:hover{
    background-color: ${(props) => props.color};;
    color: ${(props) => props.backgroud};
    font-weight: bolder;
    border: 3px solid ${(props) => props.backgroud};
  }
`;