import { useEffect, useState } from "react";
import ReactLoading from 'react-loading';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Container, CustomModal, PageLayout, Row, TextInfo } from "../../components";

import { UserResponseType, UserType } from '../../types/UserType';
import UserService from "../../services/user.service";
import { errorToast, successToast } from "../../services/toast.service";
import { BtnAction, Button, CardUser, Confirm, Dados, Footer, FormContainer, Input, Label, Options, Space } from './styles';
import userService from "../../services/user.service";

const Admin = () => {
    const [users, setUsers] = useState<UserResponseType[]>([])
    const [user, setUser] = useState<UserType>({
        userName: '',
        fullName: '',
        password: '',
        email: '',
        type: ''
    })

    const [idDelete, setIdDelete] = useState('')
    const [modalConfirm, setModalConfirm] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [inputs, setInputs] = useState<UserType>({
        userName: '',
        fullName: '',
        password: '',
        email: '',
        type: ''
    });

    useEffect(() => {
        getUsers();
    }, [isLoading])

    const getUsers = async () => {
        await UserService.findAll().then((response) => {
            setUsers(response);
            setIsLoading(false);
        });
    }

    const openModalConfirm = (id: string) => {
        setModalConfirm(true);
        setIdDelete(id);
    }
    const closeConfirm = () => {
        setModalConfirm(false);
    }
    const openModalEdit = (id: string) => {
        setModalEdit(true);
    }
    const closeEdit = () => {
        setInputs({
            userName: '',
            fullName: '',
            password: '',
            email: '',
            type: ''
        })
        setModalEdit(false);
    }

    const deleteUser = async (id: string) => {
        await UserService.delete(id).then(() => {
            successToast('Registro removido com sucesso')
            getUsers()
            setModalConfirm(false);
        }).catch((error) => {
            errorToast('Falha ao deletar o Usuário!')
            setModalConfirm(false);
        });
    }

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
        const newUser = inputs;
        newUser.type = 'User'
        setUser(newUser);
    }

    const handleSubmite = async(e: any) => {
        e.preventDefault();
        await userService.create(user).then(()=>{
            getUsers();
            closeEdit();
        });
    }

    return (
        <PageLayout>
            <h1 >Usuários Cadastrados</h1>
            <Button width={150} height={25} Backgroud="#065022" color="#fff"
                onClick={() => openModalEdit(``)}
            >
                <FontAwesomeIcon icon={faPlus} />
                Novo Usuário
            </Button>
            {isLoading && <ReactLoading type={"spin"} width={80} height={80} color="#451245" />}
            <Container>
                <Row>
                    {users.map((user) => {
                        return (
                            <CardUser key={user._id} >
                                <Dados>
                                    <TextInfo header={'UserName: '} info={user.userName} />
                                    <TextInfo header={'Nome Completo: '} info={user.fullName} />
                                    <TextInfo header={'E-mail: '} info={user.email} />
                                    <TextInfo header={'Tipo: '} info={user.type} />
                                </Dados>
                                <Options>
                                    <Button
                                        width={90} height={40}
                                        Backgroud="#972915" color="#fff"
                                        onClick={() => openModalConfirm(`${user._id}`)}
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                        Delete
                                    </Button>
                                </Options>
                                <hr />
                            </CardUser>
                        )
                    })}
                    <Footer />
                </Row>
            </Container>

            <CustomModal open={modalConfirm} close={() => closeConfirm()}>
                <Confirm>
                    <TextInfo header={'Atenção'} info={'Deseja realmente deletar este registro?'} />
                    <Options>
                        <Button width={80} height={35} Backgroud="#228b22e6" onClick={() => deleteUser(idDelete)}>Sim</Button>
                        <Space width={50} />
                        <Button width={80} height={35} Backgroud="#972915" onClick={() => closeConfirm()}>Não</Button>
                    </Options>
                </Confirm>
            </CustomModal>
            <CustomModal open={modalEdit} close={() => closeEdit()}>

                <TextInfo header={'Novo Usuário'} />
                <FormContainer onSubmit={e => { handleSubmite(e) }}>
                    <Label> Username:
                        <Input name="userName" type="text" value={inputs.userName || ""} onChange={handleChange} required />
                    </Label>
                    <Label> FullName:
                        <Input name="fullName" type="text" value={inputs.fullName || ""} onChange={handleChange} required />
                    </Label>
                    <Label> E-mail:
                        <Input name="email" type="email" value={inputs.email || ""} onChange={handleChange} required />
                    </Label>
                    <Label> Passwoord:
                        <Input name="password" type="password" value={inputs.password || ""} onChange={handleChange} required />
                    </Label>

                    <Options>
                        <BtnAction type='submit' backgroud={'#451245'} color={'#FFF'}>Salvar</BtnAction>
                        <Space width={50} />
                        <BtnAction type='button' backgroud={'#972915'} color={'#FFF'} onClick={()=> closeEdit()}>Fechar</BtnAction>
                    </Options>
                </FormContainer>

            </CustomModal>
        </PageLayout>
    );
}

export default Admin;