import React from 'react';
import s from './NavBar.module.scss';
import {NavLink} from "react-router-dom";

const Logo = require('../NavBar/images/logo.png');


export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.logoBlock}>

            </div>
            <div className={s.navBlock}>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to='/profile' activeClassName={s.active}> Profile </NavLink>
                </div>
                <div className={`${s.item}`}>
                    <NavLink to='/dialogs' activeClassName={s.active}> Messages </NavLink>
                </div>
                <div className={`${s.item}`}>
                    <NavLink to='/users' activeClassName={s.active}> Users </NavLink>
                </div>
                <div className={`${s.item}`}>
                    <NavLink to='/music' activeClassName={s.active}> Music </NavLink>
                </div>
                <div className={`${s.item}`}>
                    <NavLink to='/friends' activeClassName={s.active}> Friends </NavLink>
                </div>
            </div>
        </nav>
    );
}
