import React from 'react';
import s from './ProfileInfo.module.css'

const BackgroundCover = require('./BGcovering.jpg');

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={BackgroundCover} alt='background cover'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}
