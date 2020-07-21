import React from 'react';
import './CatItem.css';
import catAvatar from '../../../assets/images/cat-avatar.png';

const CatItem = () => {
    return (
        <div className="cat-item-container">
            <img src={catAvatar} alt="cat avatar" />
            <div className="cat-item-messages">
                <label>Mensaje</label>
            </div>
        </div>
    );
}

export default CatItem;