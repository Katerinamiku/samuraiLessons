import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./myPosts/ProfileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts/>
        </div>
    );

}
