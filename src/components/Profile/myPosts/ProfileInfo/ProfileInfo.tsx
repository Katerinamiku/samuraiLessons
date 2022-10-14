import React from 'react';
import s from './ProfileInfo.module.scss'
import Preloader from "../../../Common/Preloader/Preloader";
import {UserProfileType} from "../../../../Redux/reducers/ProfilePageReducer";
import ProfileStatus from "./ProfileStatus";
import {ProfileStatusHooks} from "./ProfileStatusHooks";
import userAvatar from "../../../../common/userAvatar.png";
//
// const BackgroundCover = require('./BGcovering.jpg');

type ProfileInfoType = {
    profile: UserProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileInfoContainer}>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userAvatar}/>
                <div className={s.status}>
                    {/*<ProfileStatus status={props.status}*/}
                    {/*               updateStatus={props.updateStatus}/>*/}
                    <ProfileStatusHooks status={props.status}
                                        updateStatus={props.updateStatus}/>
                </div>
            </div>
            <div>
                <div>{`${props.profile.fullName}`}</div>
                <div>About me: {props.profile.aboutMe && `${props.profile.aboutMe}`} </div>
                <div>Looking for a
                    job: {props.profile.lookingForAJobDescription && `${props.profile.lookingForAJobDescription}`}</div>
                <div>Contact me: {props.profile.contacts && `${Object.keys(props.profile.contacts)}`}</div>
            </div>
        </div>
    );
}
