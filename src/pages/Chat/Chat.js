import React from 'react';
import './Chat.css';
import CatItem from './CatItem/CatItem';

const Chat = () => {
    return (
        <div className="chat-container">
            <div className="chat-content">
                <div className="chatbox-chat">
                    <div className="chatbox-container-body">
                        <CatItem />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;