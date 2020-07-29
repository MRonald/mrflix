import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="MRFlix Logo" className="Logo"/>
            </a>
        </nav>
    );
}

export default Menu;