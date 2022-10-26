import React from 'react';
import s from './ProfileInfo.module.scss'
import Preloader from "../../../Common/Preloader/Preloader";
import {UserProfileType} from "../../../../Redux/reducers/ProfilePageReducer";
import ProfileStatus from "./ProfileStatus";
import {ProfileStatusHooks} from "./ProfileStatusHooks";
import userAvatar from "../../../../common/images/userAvatar.png";
import {Field} from "redux-form";

type ProfileInfoType = {
    profile: UserProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoType) => {

    // let inputs = props.profile.contacts && Object.keys(props.profile.contacts).map((key) => {
    //     return <div key={key}>
    //         <label>
    //             <Field type="input" component={'input'} name={'contacts.' + key} key={key}/>
    //             {key}
    //         </label>
    //     </div>
    // })

    if (!props.profile) {
        return <Preloader/>
    } else {
    return (
        <div className={s.profileInfoContainer}>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userAvatar} alt={'user' +
                    ' avatar'}/>
                <div className={s.status}>
                    <div className={s.profileName}>{`${props.profile.fullName}`}</div>
                    {/*<ProfileStatus status={props.status}*/}
                    {/*               updateStatus={props.updateStatus}/>*/}
                    <ProfileStatusHooks status={props.status}
                                        updateStatus={props.updateStatus}/>
                </div>
            </div>
            <div className={s.profileInfo}>
                <div className={s.profileMainText}>About me:
                    <span> {props.profile.aboutMe && `${props.profile.aboutMe}`} </span>
                    </div>
                <div>Looking for a
                    job:
                    <span> {props.profile.lookingForAJobDescription && `${props.profile
                        .lookingForAJobDescription}`}</span>
                    </div>
                <div>Contact me:
                    <ul className={s.contacts}>
                            <li>{props.profile.contacts.github} Github</li>
                            <li>{props.profile.contacts.facebook}Facebook</li>
                            <li>{props.profile.contacts.mainLink}Email</li>

                        {/*{props.profile.contacts && `${Object.keys(props.profile.contacts)}`}*/}
                        {/*{inputs}*/}
                    </ul>
                </div>
            </div>
        </div>
    );
}
}
