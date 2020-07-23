import React from 'react';
import './CatItem.css';
import catAvatar from '../../../assets/images/cat-avatar.png';

const CatItem = ({text}) => {
    let imgUrl = "";
    if (text[0] === "meme") imgUrl = text[1];
    
    return (
        <div className="cat-item-container">
            <img src={catAvatar} alt="cat avatar" />
            <div className="cat-item-messages">
                { imgUrl === ""  && text.map((txt, i) => <label key={i}>{txt}</label> ) }
            </div>
            {
                imgUrl !== "" &&
                    <div className="cat-item-meme-container">
                        <img src={imgUrl} alt="a cat meme"/>
                    </div>
            }            
        </div>
    );
}

export default CatItem;