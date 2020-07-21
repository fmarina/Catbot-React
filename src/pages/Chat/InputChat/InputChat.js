import React from 'react';
import './InputChat.css';

const InputChat = () => {
    return (
        <div>
            <form className="chatbox-inputchat-container">
                <input 
                    type="text" 
                    placeholder="Ingrese nombre"
                />
                <button type="submit" />
            </form>
        </div>
    );
}

export default InputChat;