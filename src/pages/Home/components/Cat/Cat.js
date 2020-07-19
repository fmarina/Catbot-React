import React from 'react';
import './Cat.css';
import animationCat from './cat-data.json';
import Lottie from 'react-lottie';

const Cat = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationCat,
    };

    return (
        <div className="cat-container">
            <Lottie options={defaultOptions}/>
            <label>Hola humano!</label>
        </div>
    );
}

export default Cat;