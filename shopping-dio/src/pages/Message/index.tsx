import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faMailBulk } from '@fortawesome/free-solid-svg-icons';

import { Container, PageLayout, Row, TextInfo } from "../../components";
import { MessageType } from '../../types/MessageType';
import MessageService from '../../services/message.service';
import { Button, CardMessage, Dados, FormContainer, InputsContainer, InputEmail, InputMessge, Options, Space } from './styles';

const Message = () => {
    const [messages, setMessages] = useState<MessageType[]>([])
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getMessages();
    }, [isLoading])

    const getMessages = async () => {
        await MessageService.findAll().then((response) => {
            setMessages(response);
            setIsLoading(false);
        });
    }

    const createMessage = async () => {
        const newMessage:MessageType = {email, message}
        if(!email || !message)return null;
        await MessageService.create(newMessage).then(()=>{
            getMessages()
            clear()
        })
    }
    const clear = () => {
        setEmail('');
        setMessage('');
    }

    return (
        <PageLayout>
            {isLoading && <ReactLoading type={"spin"} width={80} height={80} color="#451245" />}
            <Container>
                <Row>
                    <FormContainer>
                        <InputsContainer>
                            <TextInfo header={'Mande suas sugestões, críticas ou elogios!'} />
                            <InputEmail id='inpEmail' placeholder='E-mail' value={email} type='email' onChange={( evt )=> setEmail(evt.target.value)} />
                            <InputMessge id='inpMessage' rows={4} value={message} onChange={( evt )=> setMessage(evt.target.value)} />
                        </InputsContainer>
                        <Options>
                            <Button
                                width={80} height={35}
                                Backgroud="#062650" color="#fff"
                                onClick={() => createMessage()}
                            >
                                <FontAwesomeIcon icon={faMailBulk} />
                                
                                <span>Enviar</span>
                            </Button>
                            <Button
                                width={80} height={35}
                                Backgroud="#972915" color="#fff"
                                onClick={() => clear()}
                            >
                                <FontAwesomeIcon icon={faBan} />
                                <span>Limpar</span>
                            </Button>

                        </Options>
                    </FormContainer>
                    {messages.map((message) => {
                        return (
                            <CardMessage key={message._id}>
                                <Dados>
                                    <TextInfo header={message.email} />
                                    <Space></Space>
                                    <TextInfo info={message.message} />
                                </Dados>
                            </CardMessage>
                        )
                    })}
                </Row>
            </Container>
        </PageLayout>
    );
}

export default Message;