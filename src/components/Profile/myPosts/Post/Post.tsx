import React from 'react';
import s from './Post.module.scss'
import {UserProfileType} from "../../../../Redux/reducers/ProfilePageReducer";
import userAvatar from "../../../../common/images/userAvatar.png";
import Preloader from "../../../Common/Preloader/Preloader";

const deleteIcon = require('../../../../common/images/delete.png');

type MessageType = {
    id: string
    message: string
    likes: number
    profile: UserProfileType | null
}
export const Post = (props: MessageType) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div key={props.id} className={s.item}>
                <img src={props.profile.photos.small != null ? props.profile.photos.small : userAvatar} alt={'user' +
                    ' avatar'}/>
                <div className={s.messageBody}>
                    <div> {props.message}</div>
                    <div className={s.messageAttributes}>
                        <span>{props.likes !== 1 ? props.likes + ' likes' : props.likes + ' like'}</span>
                        <img className={s.deleteIcon} src={deleteIcon} alt='delete'/>
                    </div>

                </div>
            </div>
        );
    }
}
