import React from 'react';
import s from './Header.module.css';
const Logo = require('../img/logoS.jpg');

export const Header = () => {
    return (
        <div className={s.header}>
            <img src={Logo} alt='logo'/>
        </div>
    );

}
