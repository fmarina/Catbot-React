import React from 'react';
import './UserItem.css';
import userAvatar from '../../../assets/images/user-avatar.png';

const UserItem = ({text}) => {
    return (
        <div className="user-item-container">
            <div className="user-item-messages">
                <label>{text}</label>
            </div>
            <img src={userAvatar} alt="user avatar" />     
        </div>
    );
}

export default UserItem;