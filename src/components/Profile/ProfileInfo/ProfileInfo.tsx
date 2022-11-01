import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.scss'
import Preloader from "../../Common/Preloader/Preloader";
import {UserProfileType} from "../../../Redux/reducers/ProfilePageReducer";
import ProfileStatus from "./ProfileStatus";
import {ProfileStatusHooks} from "./ProfileStatusHooks";
import userAvatar from "../../../common/images/userAvatar.png";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";



const photoIcon = require('../../../common/images/profile.png');

type ProfileInfoType = {
    profile: UserProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photoFile: File) => void
    saveProfileData: (formData: UserProfileType) => Promise<any>
}

export const ProfileInfo = (props: ProfileInfoType) => {

    const [editMode, setEditMode] = useState(false)

    //закрывает этидмод когда вернется результат, если будет ошибка - не закроет эдит
    const submitProfileData = (formData: UserProfileType) => {
    props.saveProfileData(formData)
        .then(()=>{
           setEditMode(false)
       });
    }
    const changePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div className={editMode ? `${s.editModeBG} ${s.profileInfoContainer}` : s.profileInfoContainer}>
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
                    {editMode
                        ? <div>
                            <ProfileDataForm initialValues={props.profile} onSubmit={submitProfileData}/>
                        </div>
                        : <ProfileData profile={props.profile}
                                       isOwner={props.isOwner}
                                       editModeOn={() => setEditMode(true)}/>
                    }
                </div>
            </div>
        );
    }
}





