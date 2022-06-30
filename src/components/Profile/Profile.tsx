import React from 'react';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./myPosts/ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from './../../Redux/State'

type DataType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes)=>void
}

export const Profile = (props: DataType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    );

}

