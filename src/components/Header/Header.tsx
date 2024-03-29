import React from 'react';
import s from './Header.module.scss';
import {NavLink, Redirect} from "react-router-dom";
import {Button} from "../Common/Button/Button";
const Logo = require('../../common/images/logo.png');

type HeaderType = {
    isAuth: boolean
    login: string
    setLogout: () => void
}
export const Header = (props: HeaderType) => {

    return (
        <div className={s.header}>
            <a href={'/profile'}> <img src={Logo} className={s.logo} alt='logo'/></a>
            <div className={s.greeting}>
                Welcome to IT-cats community, paw!
            </div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div className={s.loginName}>
                        Hi, {props.login}!
                        <Button callBack={props.setLogout} name={'Log out'} size={'large'}/>
                        <Redirect to={'profile'}/>
                        </div>
                    : <NavLink to={'/login'}>
                        <Button callBack={()=>{}} name={'Log in'}  size={'large'}/>
                    </NavLink>
                }
            </div>
        </div>
    );

}
