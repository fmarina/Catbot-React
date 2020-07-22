import React, {useState, useEffect} from 'react';
import './Chat.css';
import CatItem from './CatItem/CatItem';
import UserItem from './UserItem/UserItem';
import InputChat from './InputChat/InputChat';

const Chat = () => {
    
    let idCounter = 0;
    
    const [msg, setMsg] = useState({});
    const [chat, setChat] = useState([
        {
            id : 0,
            emitter : "Cat",
            msg : ["Hola!", "Cómo te llamas?"]
        }
    ]);

    function firstResponse(name) {
        let newChat = {
            id : idCounter + 2,
            emitter : "Cat",
            msg : [
                "Encantado, " + name + "!", 
                "Mi nombre es Miyi, soy un catbot aún en desarrollo",
                "Eso quiere decir que aún no estoy preparado para tus preguntas específicas 😞",
                "Pero aún así podemos interactuar! 😉",
                "Hazme una pregunta de la lista, y con gusto la responderé!"
            ]
        }
        if(newChat) setChat([...chat, newChat]);
    }

    function getMeMessage(value) {
        idCounter = idCounter + 1;
        setMsg({
            id : idCounter,
            emitter : "User",
            msg : value
        });
    }

    function sendMessage(e) {
        e.preventDefault();
        setChat([...chat, msg]);
    }

    useEffect(() => {
        if (chat.length === 2) {
            setTimeout(() => firstResponse(msg.msg), 500);
            setMsg({ ...msg, msg : "" });
            // setTimeout(() => setOpenSelect(true), 600);
        }
    }, [chat]);

    return (
        <div className="chat-container">
            <div className="chat-content">
                <div className="chatbox-chat">
                    <div className="chatbox-container-body">
                        {   
                            chat.map((message, i) => 
                                message.emitter === "Cat"
                                ? <CatItem key={i} text={message.msg} />
                                : <UserItem key={i} text={message.msg} />
                            )
                        }
                    </div>
                    <div className="chatbox-container-input">
                        <InputChat 
                            msg={msg}
                            getMeMessage={getMeMessage}
                            sendMessage={sendMessage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;