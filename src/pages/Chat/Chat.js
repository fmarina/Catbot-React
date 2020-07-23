import React, {useState, useEffect, useRef} from 'react';
import './Chat.css';
import CatItem from './CatItem/CatItem';
import UserItem from './UserItem/UserItem';
import InputChat from './InputChat/InputChat';
import Select from './Select/Select';
import {doing, aboutMe, meme} from '../../data/Actions';
import Fade from 'react-reveal/Fade';

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
    const [interactions, setInteractions] = useState([]);
    const [openSelect, setOpenSelect] = useState(false);
    const scrollRef = useRef(null);

    let options = [
        {
            id: "What are you doing?",
            text: "¿Que estas haciendo?"
        },
        {
            id: "Send me a meme!",
            text: "Me compartis un meme?"
        },
        {
            id: "Tell me about you!",
            text: "Cuentame sobre ti!"
        }
    ];

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
    
    function scrollToBottom() {
        setTimeout(() => {
            scrollRef.current.scrollIntoView({behavior: "smooth"});            
        }, 600);        
    }

    useEffect(() => {
        if (chat.length === 2) {
            setTimeout(() => {
                (msg.msg === undefined)
                ? firstResponse("Anonimo 🙄")
                : firstResponse(msg.msg)
            }, 500);
            setMsg({ ...msg, msg : "" });
            setTimeout(() => setOpenSelect(true), 600);            
        }
    }, [chat]);

    function handleSelectedOptions(value) {
        let result;
        switch(value) {
            case "What are you doing?":
                result = doing[Math.floor(Math.random() * doing.length)];
                if(result) setInteractions([...interactions, result.msg]);
                break;
            case "Tell me about you!":
                result = aboutMe[Math.floor(Math.random() * aboutMe.length)];
                if(result) setInteractions([...interactions, result.msg]);
            break;
            case "Send me a meme!":
                result = meme[Math.floor(Math.random() * meme.length)];
                if(result) setInteractions([...interactions, result.img]);
                break;
        }
        scrollToBottom();
    }

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

                        {   (openSelect) && 
                                <Fade right>
                                    <Select 
                                        options={options} 
                                        handleSelect={handleSelectedOptions}
                                    />
                                </Fade>
                        }
                        {
                            (interactions.length > 0) && 
                                interactions.map((interaction, i) => 
                                    <>
                                        <Fade left>
                                            <CatItem key={i} text={interaction} />
                                        </Fade>
                                        <Fade right>
                                            <Select
                                                key={i}
                                                options={options} 
                                                handleSelect={handleSelectedOptions}
                                            />
                                        </Fade>
                                    </>
                                )
                        }
                        <div ref={scrollRef}></div>
                    </div>
                    <div className="chatbox-container-input">
                        <InputChat 
                            chat={chat}
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