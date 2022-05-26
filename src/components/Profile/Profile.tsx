import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";

const BackgroundCover = require('../img/BGcovering.jpg');

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={BackgroundCover} alt='background cover'/>
            </div>
            <div>
                ava
            </div>
            <MyPosts />
        </div>
    );

}
