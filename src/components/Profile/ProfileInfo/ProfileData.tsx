import React from 'react';
import {UserProfileType} from "../../../Redux/reducers/ProfilePageReducer";
import s from "./ProfileInfo.module.scss";


const editIcon = require('../../../common/images/edit.png');

type ProfileDataPropsType = {
    profile: UserProfileType | null
    isOwner: boolean
    editModeOn: () => void
}


const ProfileData = (props: ProfileDataPropsType) => {

    return (
        <div>
            {props.isOwner && <span className={s.editProfile} onDoubleClick={props.editModeOn} >
                <img className={s.editIcon} src={editIcon} alt='edit profile'/>edit profile</span>}

            <div className={s.profileMainText}>About me:
                <span className={s.profileText}> {props.profile?.aboutMe && `${props.profile.aboutMe}`} </span>
            </div>
            <div className={s.profileMainText}>Looking for a job:
                <span className={s.profileText}> {props.profile?.lookingForAJob === true ? `${props.profile
                    .lookingForAJobDescription}` : 'no'}</span>
            </div>
            <div> Contact me:
                <ul className={s.contacts}>
                    <li><a href={props.profile?.contacts.github ? props.profile?.contacts.github.toString() : ''} className={!props.profile?.contacts.github ? s.noContact : ''}>Github</a>
                    </li>
                    <li><a href={props.profile?.contacts.facebook ? props.profile?.contacts.facebook.toString() : ''} className={!props.profile?.contacts.facebook ? s.noContact : ''}>Facebook</a>
                    </li>
                    <li><a href={props.profile?.contacts.mainLink ? props.profile?.contacts.mainLink.toString() : ''} className={!props.profile?.contacts.mainLink ? s.noContact : ''}>Email</a>
                    </li>
                    <li><a href={props.profile?.contacts.website ? props.profile?.contacts.website.toString() : ''} className={!props.profile?.contacts.website ? s.noContact : ''}>Portfolio</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileData;
