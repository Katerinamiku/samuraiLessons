import React from "react";
import s from "./Users.module.scss";
import userAvatar from "../../common/images/userAvatar.png";
import {UsersType} from "../../Redux/reducers/UsersReducer";
import {NavLink} from "react-router-dom";
import {Button} from "../Common/Button/Button";


type UsersAPIPropsType = {
    user: UsersType
    follow: (id: number) => void
    unfollow: (id: number) => void
    followingInProgress: number[]
}

export const User = (props: UsersAPIPropsType) => {
//цифры переключения сттаниц - нужно их помещать в стейт так как мы их меняем

    return (
             <div>
                <div className={s.userInfo}>
                    <div className={s.avatarWindow}>
                        <div>
                            <NavLink to={'/profile/' + props.user.id}>
                                <img className={s.avatar} alt={'avatar'} src={props.user.photos.small != null ? props.user.photos.small : userAvatar}/>
                            </NavLink>
                        </div>
                        <div className={s.buttons}>
                            {props.user.followed
                                ? <Button name={'Unfollow'} size={'small'} callBack={() => props.unfollow(props.user.id)}
                                          disabled={props.followingInProgress.some((el) => el === props.user.id)}/>
                                : <Button size={'small'} name={'Follow'} callBack={() => {
                                    props.follow(props.user.id)
                                }} disabled={props.followingInProgress.some(el => el === props.user.id)}/>}
                        </div>
                    </div>
                    <div className={s.userDescription}>
                        <div className={s.name}>{props.user.name}</div>
                        <div className={s.status}>{props.user.status}</div>
                        <div className={s.location}>
                        </div>
                    </div>
                </div>
            </div>

    );
};



