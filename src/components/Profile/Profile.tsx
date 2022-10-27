import React from 'react';
import {ProfileInfo} from "./myPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {UserProfileType} from "../../Redux/reducers/ProfilePageReducer";
import s from './Profile.module.scss';

export type UserProfileInfoType = {
    profile: UserProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photoFile: File) => void
}

export const Profile = (props: UserProfileInfoType) => {

    return (
        <div className={s.profileContainer}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}/>
            <MyPostsContainer/>
        </div>
    );

}

