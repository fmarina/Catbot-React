import React from 'react';
import './Chat.css';
import CatItem from './CatItem/CatItem';
import UserItem from './UserItem/UserItem';
import InputChat from './InputChat/InputChat';

const Chat = () => {
    return (
        <div className="chat-container">
            <div className="chat-content">
                <div className="chatbox-chat">
                    <div className="chatbox-container-body">
                        <CatItem />
                        <UserItem />                        
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