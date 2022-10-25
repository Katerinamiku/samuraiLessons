import React from "react";
import s from "./Users.module.scss";
import {UsersType} from "../../Redux/reducers/UsersReducer";
import {Pagination} from "../Common/Pagination/Pagination";
import {User} from "./User";


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

    return (
        <div className={s.userWindow}>
            <Pagination currentPage={props.currentPage}
                        pageSize={props.pageSize}
                        onPageChanged={props.onPageChanged}
                        totalItemsCount={props.totalUsersCount}
                        portionSize={10}/>
            {props.users.map(u => <div key={u.id}>
                <User user={u}
                      followingInProgress={props.followingInProgress}
                      follow={props.follow}
                      unfollow={props.unfollow}/>
            </div>)}
        </div>
    );
};



