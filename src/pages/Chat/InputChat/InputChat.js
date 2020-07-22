import React from 'react';
import './InputChat.css';

const InputChat = ({getMeMessage, sendMessage, msg}) => {
    return (
        <form onSubmit={(e) => sendMessage(e)} className="chatbox-inputchat-container">
            <input 
                type="text" 
                placeholder="Ingrese nombre"
                onChange={(e) => getMeMessage(e.target.value)}
                value={msg.msg}
            />
            <button type="submit" />
        </form>
    );
}

export default InputChat;