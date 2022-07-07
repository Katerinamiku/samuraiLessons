import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";


export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink className={(navData) => navData.isActive ? s.active : s.item} to='/profile'> Prrofile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? s.active : s.item} to='/dialogs'>Meowssages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? s.active : s.item} to='/news'>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? s.active : s.item} to='/music'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? s.active : s.item} to='/settings'>Settings</NavLink>
            </div>
        </nav>
    );
}
