import React from "react";
import s from "./Users.module.css";
import userAvatar from "../../components/img/userAvatar.png";
import {UsersType} from "../../Redux/UsersReducer";
import {NavLink} from "react-router-dom";


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
            <div>
                {pages.map(p => <span key={p} className={props.currentPage === p ? s.selectedPage : ''}
                                      onClick={(e) => {props.onPageChanged(p)}}>{p}</span>)}

            </div>
            {props.users.map(u => <div key={u.id}>
                <div className={s.userInfo}>
                <span className={s.avatarWindow}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img className={s.avatar} src={u.photos.small != null ? u.photos.small : userAvatar}/>
                        </NavLink>
                        </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some((el) => el === u.id)} onClick={() => {
                               props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(el => el === u.id)} onClick={() => {
                               props.follow(u.id)
                            }}>Follow</button>}
                        </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                         <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                </div>
            </div>)}
        </div>
    );
};



