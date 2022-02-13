import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faMailBulk, faCog, faKey } from '@fortawesome/free-solid-svg-icons';

import loginService from '../../services/login.service';
import { CustomModal } from '../CustomModal';
import './header.css';
import { BtnClose, BtnLogin, BtnLogoff, FormContainer, Input, Label, Menu, Option, Title, Wrapper } from "./styles";
import { UserLoginType } from '../../types/UserType';
import { successToast, errorToast } from '../../services/toast.service';
import Cart from '../Cart';


export const Header = () => {
    const [modalLogin, setModalLogin] = useState(false);
    const [token, setToken] = useState('');

    const [inputs, setInputs] = useState<UserLoginType>({username:'', password:''});

    const login = async (user: UserLoginType) => {
        await loginService.login(user).then(()=>{
            successToast('Usuário logado com sucesso!')
        }).catch((error)=>{
            errorToast('Erro ao tentar logar!')
        });
        getToken();
    }
    const logoff = async () => {
        await loginService.logoff().then(()=>{
            setToken('');
            setModalLogin(false);
            getToken();
        });
    }

    const closeLogin = () => {
        setModalLogin(false);
    }

    const getToken = async () => {
        const tk = await loginService.getToken()
        if (tk) {
            let payload: { type: string } = jwt_decode(tk)

            if (payload['type'] == 'Admim') {
                setToken(tk);
            }
        }
    }

    const handleChange = (event:any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmite = (e:any) => {
        e.preventDefault();
        login(inputs);
    }

    useEffect(() => {
        getToken()
    }, [token])


    return (
        <Wrapper>
            <Title><img src={'../../../assets/dio2.png'} /><span>Shopping Digital Inovation One</span></Title>
            <Menu>
                <NavLink to='/'>
                    <Option>
                        <FontAwesomeIcon title='Home' icon={faHome} />
                        <span>Home</span>
                    </Option>
                </NavLink>
                <NavLink to='/messages'>
                    <Option>
                        <FontAwesomeIcon title='Contatos' icon={faMailBulk} />
                        <span>Contatos</span>
                    </Option>
                </NavLink>
                <Cart />   
                {
                    token &&
                    <NavLink to='/admin'>
                        <Option>
                            <FontAwesomeIcon title='Admin' icon={faCog} />
                            <span>Admin</span>
                        </Option>
                    </NavLink>
                }
                <Option onClick={() => setModalLogin(true)}>
                    <FontAwesomeIcon title='Login' icon={faKey} />
                </Option>

            </Menu>
            <CustomModal open={modalLogin} close={() => closeLogin()}>
                <FormContainer onSubmit={e => {handleSubmite(e)}}>
                    <Label> Username:
                        <Input name="username" type="text" value={inputs.username || ""} onChange={handleChange}/>
                    </Label>
                    
                    <Label> Passwoord: 
                        <Input name="password" type="password" value={inputs.password || ""} onChange={handleChange}/>
                    </Label>
                    <BtnLogin type='submit'>Acessar</BtnLogin>
                </FormContainer>
                <Option style={{display: 'flex', justifyContent:'space-around', width: '100%', margin: '10px'}}>
                    <BtnLogoff onClick={() => logoff()}>Logoff</BtnLogoff>
                    <BtnClose onClick={() => closeLogin()}>Fechar</BtnClose>
                </Option>
            </CustomModal>
        </Wrapper>
    );
}
