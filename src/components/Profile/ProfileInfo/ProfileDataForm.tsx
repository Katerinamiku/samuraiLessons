import React from 'react';
import s from "./ProfileInfo.module.scss";
import style from '../../Common/FormsControls/FormsControls.module.scss'
import {createField, InputCommon, TextAreaCommon} from "../../Common/FormsControls/TextAreaCommon";
import {InjectedFormProps, reduxForm} from "redux-form";
import {UserProfileType} from "../../../Redux/reducers/ProfilePageReducer";

const saveIcon = require('../../../common/images/save.png');

const ProfileDataForm = ({handleSubmit, error, ...rest}: InjectedFormProps<UserProfileType>) => {
    return (
        <div className={s.profileForm}>
            <form onSubmit={handleSubmit}>
                <span className={s.editProfile} onClick={handleSubmit}>
                <img className={s.editIcon} src={saveIcon} alt='save info'/> save</span>
                {error && <span className={style.formGroupError}>
                    {error}
                </span>}

                <div className={s.editFields}>Full name: {createField('Full name', 'fullName', [], InputCommon)}
                </div>
                <div className={s.editFields}>About me:{createField('About me', 'aboutMe', [], TextAreaCommon)}
                </div>
                <div className={s.editFields}>Looking for a
                    job {createField('', 'lookingForAJob', [], InputCommon, {type: 'checkbox'})}
                </div>
                <div className={s.editFields}>My skills:{createField('Looking for a job', 'lookingForAJobDescription', [], TextAreaCommon)}
                </div>
                <div>My contacts:
                    <ul className={s.contacts}>
                        <li>Github: {createField('Github', 'contacts.github', [], InputCommon)} </li>
                        <li>Facebook: {createField('Facebook', 'contacts.facebook', [], InputCommon)}</li>
                        <li>Email: {createField('Email', 'contacts.mainLink', [], InputCommon)}</li>
                        <li>Portfolio: {createField('Portfolio', 'contacts.website', [], InputCommon)}</li>
                    </ul>
                </div>
            </form>
        </div>
    );
};

const ProfileDataFormReduxForm = reduxForm<UserProfileType>({form: 'editProfile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;
