import React from 'react';
import './CatItem.css';
import catAvatar from '../../../assets/images/cat-avatar.png';
import Fade from 'react-reveal/Fade';

const CatItem = ({text}) => {
    
    return (
        <div className="cat-item-container">
        <Fade cascade>
            <img src={catAvatar} alt="cat avatar" />
            <div className="cat-item-messages">
                { text.map((txt, i) => <label key={i}>{txt}</label> ) } 
            </div>
        </Fade>        
        </div>
    );
}

export default CatItem;