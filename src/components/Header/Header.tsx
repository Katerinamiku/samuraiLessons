import React from 'react';
import s from './Header.module.scss';
import {NavLink} from "react-router-dom";
import {Button} from "../../common/Components/Button";
const Logo = require('../../common/logo.png');

type HeaderType = {
    isAuth: boolean
    login: string
    setLogout: () => void
}
export const Header = (props: HeaderType) => {

    return (
        <div className={s.header}>
            <img src={Logo} className={s.logo} alt='logo'/>
            <div className={s.greeting}>
                Welcome to IT-cats community, paw!
            </div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div className={s.loginName}>
                        {props.login}
                        <Button callBack={props.setLogout} name={'Log out'} size={'large'}/>
                        </div>
                    : <NavLink to={'/login'}>
                        <Button callBack={()=>{}} name={'Log in'}  size={'large'}/>
                    </NavLink>
                }
            </div>
        </div>
    );

}
