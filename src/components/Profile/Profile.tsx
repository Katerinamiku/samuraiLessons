import React from 'react';
import {ProfileInfo} from "./myPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {UserProfileType} from "../../Redux/ProfilePageReducer";

export type UserProfileInfoType = {
    profile: UserProfileType | null
    setUserProfile: (profile: UserProfileType) => void
}


export const Profile = (props: UserProfileInfoType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );

}

