import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../Common/Preloader/Preloader";
import {UserProfileType} from "../../../../Redux/ProfilePageReducer";
import ProfileStatus from "./ProfileStatus";
//
// const BackgroundCover = require('./BGcovering.jpg');

type ProfileInfoType = {
    profile: UserProfileType | null
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                {/*<img src={BackgroundCover} alt='background cover'/>*/}
            </div>
            <div className={s.descriptionBlock}>
               <img src={props.profile.photos.large}/>
            </div>
            <div>
                <ProfileStatus status={'Хардкодный статус'}/>
            </div>
            <div>
                <div>{`${props.profile.fullName}`}</div>
                <div>About me: {props.profile.aboutMe && `${props.profile.aboutMe}`} </div>
                <div>Looking for a job: {props.profile.lookingForAJobDescription && `${props.profile.lookingForAJobDescription}`}</div>
                <div>Contact me: {props.profile.contacts && `${Object.keys(props.profile.contacts)}`}</div>
            </div>
        </div>
    );
}
