import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 70px;
    background: linear-gradient(
    180deg,
    #ee931d 75%,
    rgba(255, 255, 255, 0) 100%
  );
    color: white;
    font-size: 15px;  
    font-weight: bolder;
    z-index: 997;
`;

export const Title = styled.p`
    display: flex;
    align-items: center;
    width: 50vw;
    margin-left: 30px; 
    font-size: 3vw;
    text-align: center;
    color: #451245;
    
    img{
      height: 80px;
      display: none;
    }
    @media only screen and (max-width: 800px) {

        span{ display: none}
        img{
          display:block;
        }
    }

`;
    

export const Menu = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50vw;
`;

export const Option = styled.button`
    width: 120px;
    border: none;
    border-radius: 5px;
    padding: 3px;
    margin: 0 3px;
    background-color: transparent;    
    color: blue;
    font-size: 16px;
    font-weight: bold;
    transition: 0.3s;

    @media only screen and (max-width: 800px) {
        width: 35px;
        height: 35px;
        span{
            display:none
        }
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  width: 300px;
  height: 130px;
  padding: 10px;
  background-color: #141414;
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

export const BtnLogin = styled.button`
  width: 90%;
  height: 45px;
  margin: 10px auto;
  background-color: #141414;
  color:#fff;
  border: 3px solid #fff;
  border-radius: 8px;
  transition: 0.3s;

  &:hover{
    background-color: #FFF;
    color:#141414;
    font-weight: bolder;
    border: 3px solid #504d4d;
  }
`;

export const BtnLogoff = styled.button`
  width: 120px;
  height: 25px;
  background-color: red;
  color:#fff;
  border: 3px solid #504d4d;
  border-radius: 8px;
  transition: 0.3s;

  &:hover{
    background-color: #141414;
    font-weight: bolder;
  }
`;

export const BtnClose = styled.button`
  width: 120px;
  height: 25px;
  background-color: #451245;
  color:#fff;
  border: 3px solid #504d4d;
  border-radius: 8px;
  transition: 0.3s;

  &:hover{
    background-color: #056932;
    font-weight: bolder;
  }
`;