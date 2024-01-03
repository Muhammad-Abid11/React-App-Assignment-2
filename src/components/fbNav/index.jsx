import React from 'react';
import './fb_navbar.css'; // Import your CSS file
import fbIcon from '../../assests/fb.png'
const FbNavbar = () => {
    return (
        <div className="fb-navbar">
            <div className="fb-logo">
                <i className="fab fa-facebook"><img src={fbIcon} alt="fbIcon" width={50} /></i>
            </div>
            <div className="fb-search">
                <input type="text" placeholder="Search Facebook" />
                <i className="fas fa-search"></i>
            </div>
            <div className="fb-menu">
                <i className="fas fa-home"></i>
                <i className="fas fa-users"></i>
                <i className="fas fa-comment-alt"></i>
                <i className="fas fa-bell"></i>
                <i className="fas fa-caret-down"></i>
            </div>
        </div>
    );
};

export default FbNavbar;
