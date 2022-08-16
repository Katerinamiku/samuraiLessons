import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Logo = require('../img/logoS.jpg');
type HeaderType = {
    isAuth: boolean
    login: string | null
}
export const Header = (props: HeaderType) => {

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
