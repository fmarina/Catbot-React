import React from 'react';
import './UserItem.css';
import userAvatar from '../../../assets/images/user-avatar.png';
import Fade from 'react-reveal/Fade';

const UserItem = ({text}) => {
    return (
        <div className="user-item-container">
        <Fade cascade>
            <div className="user-item-messages">
                <label>{text}</label>
            </div>
            <img src={userAvatar} alt="user avatar" />
        </Fade>
        </div>
    );
}

export default UserItem;