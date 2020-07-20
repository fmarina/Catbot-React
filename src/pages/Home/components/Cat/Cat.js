import React from 'react';
import './Cat.css';
import animationCat from './cat-data.json';
import Lottie from 'react-lottie';
import {useHistory} from 'react-router-dom';

const Cat = () => {
    const history = useHistory();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationCat,
    };

    const handleClick = () => history.push('./chat');    

    return (
        <div className="cat-container" onClick={handleClick}>
            <Lottie options={defaultOptions}/>
            <label>Hola humano!</label>
        </div>
    );
}

export default Cat;