import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from 'axios';
import userAvatar from '../../components/img/userAvatar.png'

export const Users = (props: UsersPropsType) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items);
            });
        }
    }

    return (
        <div className={s.userWindow}>
            <button style={{width: '130px'}} onClick={getUsers}>Get Users</button>
            {props.users.map(u => <div key={u.id}>
                <div className={s.userInfo}>
                <span className={s.avatarWindow}>
                    <div><img className={s.avatar} src={u.photos.small != null ? u.photos.small : userAvatar}/></div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
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

