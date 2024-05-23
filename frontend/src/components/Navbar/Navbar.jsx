import React from 'react';
import './Navbar.css';
import imageNotFound from '../../assets/imageNotFound.png'
import messages from '../../assets/messages.png'
import notifications from '../../assets/notifications.png'

const Navbar = () => {
    let profilePhoto;
    return(
        <div id="Navbar">
            <div id="hamburger">
                <input type="checkbox"/>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div id="settings">
                <img src={notifications} alt="notifications"></img>
                <img src={messages} alt="messages"></img>
            </div>
            <img src={profilePhoto ? profilePhoto : imageNotFound} alt="Profile Picture"></img>
        </div>
    )
}

export default Navbar