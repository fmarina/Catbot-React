import React from 'react';
import './InputChat.css';

const InputChat = () => {
    return (
        <form className="chatbox-inputchat-container">
            <input 
                type="text" 
                placeholder="Ingrese nombre"
            />
            <button type="submit" />
        </form>
    );
}

export default InputChat;