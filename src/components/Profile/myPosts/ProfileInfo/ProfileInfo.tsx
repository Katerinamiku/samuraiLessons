import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.scss'
import Preloader from "../../../Common/Preloader/Preloader";
import {UserProfileType} from "../../../../Redux/reducers/ProfilePageReducer";
import ProfileStatus from "./ProfileStatus";
import {ProfileStatusHooks} from "./ProfileStatusHooks";
import userAvatar from "../../../../common/images/userAvatar.png";

const photoIcon = require('../../../../common/images/profile.png');

type ProfileInfoType = {
    profile: UserProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photoFile: File) => void
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
    const changePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div className={s.profileInfoContainer}>
                <div className={s.descriptionBlock}>
                    <div><img className={s.avatar}
                              src={props.profile.photos.large != null ? props.profile.photos.large : userAvatar}
                              alt={'user avatar'}/>
                        {props.isOwner &&
                            <label htmlFor={"fileUpload"}>
                                <img src={photoIcon} alt={'avatar icon'} className={s.photoIcon}/>
                                <input id={'fileUpload'} type={'file'} onChange={changePhoto}/>
                            </label>
                        }

                    </div>
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
