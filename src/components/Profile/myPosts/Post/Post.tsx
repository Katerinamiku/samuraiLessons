import React from 'react';
import s from './Post.module.css'

const UserAvatar = require('./testimonial-2.jpg');

type MessageType = {
    id: string
    message: string
    likes: number
}
export const Post = (props:MessageType) => {

    return (
        <div className={s.item}>
            <img src={UserAvatar} alt='ava'/>
            {props.message}
            <div>
                <span>{props.likes}</span>
                <span> like</span>
                <span> cancel</span>
            </div>
        </div>
    );
}
