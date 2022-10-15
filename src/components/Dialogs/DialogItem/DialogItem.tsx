import React from "react";
import s from '../Dialogs.module.scss'
import {NavLink} from "react-router-dom";
import userAvatar from "../../../common/userAvatar.png";
type DialogItemType = {
    name: string
    id: string
}

export const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={`${s.dialogFriends} ${s.active}`}>
            <img src={userAvatar} alt={'user' +
                ' avatar'}/>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}
