import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";

const Logo = require('../img/logoS.jpg');

export const Header = (props: HeaderPropsType) => {

    return (
        <div className={s.header}>
            <img src={Logo} alt='logo'/>
            <div className={s.loginBlock}>
                {props.isAuth ? 'Login User Name' :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </div>
    );

}
