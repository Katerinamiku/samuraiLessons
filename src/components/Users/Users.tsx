import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import {v1} from "uuid";

export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {id: v1(), photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg', followed: false, fullName: 'Kate', status: 'Boss', location: {city: 'Minsk', country: 'Belarus'}},
            {id: v1(), photoUrl: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png', followed: false, fullName: 'Dima', status: 'Student', location: {city: 'Moscow', country: 'Russia'}},
            {id: v1(), photoUrl: 'https://i.yapx.ru/Ra8I0.jpg', followed: true, fullName: 'Igor', status: 'Friend', location: {city: 'Kiev', country: 'Ukrain'}},
            {id: v1(), photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg', followed: true, fullName: 'Stas', status: 'Lala', location: {city: 'Milan', country: 'Italy'}},
        ])
    }

    return (
        <div className={s.userWindow}>
            {props.users.map(u => <div key={u.id}>
                <div className={s.userInfo}>
                <span className={s.avatarWindow}>
                    <div><img className={s.avatar} src={u.photoUrl}/></div>
                    <div>
                        {u.followed
                            ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                        </div>

                </span>
                    <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                         <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
                </div>
            </div>)}
        </div>
    );
};

