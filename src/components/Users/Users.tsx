import React from "react";
import s from "./Users.module.scss";
import userAvatar from "../../common/userAvatar.png";
import {UsersType} from "../../Redux/reducers/UsersReducer";
import {NavLink} from "react-router-dom";
import {Button} from "../../common/Components/Button";


type UsersAPIPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (p: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    followingInProgress: number[]
}

export const Users = (props: UsersAPIPropsType) => {
//цифры переключения сттаниц - нужно их помещать в стейт так как мы их меняем
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.userWindow}>
            <div className={s.pagination}>
                {pages.map(p => <span key={p} className={props.currentPage === p ? s.selectedPage : ''}
                                      onClick={(e) => {
                                          props.onPageChanged(p)
                                      }}>{p}</span>)}

            </div>
            {props.users.map(u => <div key={u.id}>
                <div className={s.userInfo}>
                    <div className={s.avatarWindow}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={s.avatar} src={u.photos.small != null ? u.photos.small : userAvatar}/>
                            </NavLink>
                        </div>
                        <div className={s.buttons}>
                            {u.followed
                                ? <Button name={'Unfollow'} size={'small'} callBack={() => props.unfollow(u.id)}
                                          disabled={props.followingInProgress.some((el) => el === u.id)}/>
                                : <Button size={'small'} name={'Follow'} callBack={() => {
                                    props.follow(u.id)
                                }} disabled={props.followingInProgress.some(el => el === u.id)}/>}
                        </div>
                    </div>
                    <div className={s.userDescription}>
                        <div className={s.name}>{u.name}</div>
                        <div className={s.status}>{u.status}</div>
                        <div className={s.location}>
                            <div>{'country' + ', city'}</div>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    );
};



