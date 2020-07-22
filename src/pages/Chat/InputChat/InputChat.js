import React from 'react';
import './InputChat.css';

const InputChat = ({getMeMessage, sendMessage, msg, chat}) => {
    return (
        <form onSubmit={(e) => sendMessage(e)} className="chatbox-inputchat-container">
            <input 
                type="text" 
                value={msg.msg}
                onChange={(e) => getMeMessage(e.target.value)}
                placeholder={ (chat.length >= 3) ? "" : "Ingrese nombre"}
                disabled={ (chat.length >= 3) ? true : false}
            />
            <button type="submit" />
        </form>
    );
}

export default InputChat;