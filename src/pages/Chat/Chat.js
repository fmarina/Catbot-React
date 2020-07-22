import React, {useState} from 'react';
import './Chat.css';
import CatItem from './CatItem/CatItem';
import UserItem from './UserItem/UserItem';
import InputChat from './InputChat/InputChat';

const Chat = () => {

    const [msg, setMsg] = useState({});
    const [chat, setChat] = useState([
        {
            id : 0,
            emmiter : "Cat",
            msg : ["Hola!", "Cómo es tu nombre?"]
        }
    ]);

    return (
        <div className="chat-container">
            <div className="chat-content">
                <div className="chatbox-chat">
                    <div className="chatbox-container-body">
                        {   
                            chat.map((message, i) => 
                                message.emmiter === "Cat"
                                ? <CatItem key={i} text={message.msg} />
                                : <UserItem key={i} text={message.msg} />
                            )       
                        }                        
                    </div>
                    <div className="chatbox-container-input">
                            <InputChat />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;