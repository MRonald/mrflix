import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from '../ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="MRFlix Logo" className="Logo"/>
            </a>
            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;