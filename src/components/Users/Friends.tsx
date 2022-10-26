import React from 'react';
import userAvatar from "../../common/images/userAvatar.png";
import {UsersType} from "../../Redux/reducers/FriendsReducer";
import s from "./Friends.module.scss";
import {Pagination} from "../Common/Pagination/Pagination";
import {NavLink} from "react-router-dom";
import {Button} from "../Common/Button/Button";


type FriendPropsType = {
    friends: Array<UsersType>
    pageSize: number
    totalFriendsCount: number
    currentPage: number
    onPageChanged: (p: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    followingInProgress: number[]
}

const Friends = (props: FriendPropsType) => {

    if (!props.friends.length) {
        return <div className={s.friendsTitle}>Friends not found</div>
    }
    return (
        <div className={s.friendsBlock}>
            <div className={s.friendsTitle}>My Friends</div>
            <Pagination currentPage={props.currentPage}
                        pageSize={props.pageSize}
                        onPageChanged={props.onPageChanged}
                        totalItemsCount={props.totalFriendsCount}
                        portionSize={10}/>
            <div className={s.friendsList}>
                {props.friends.map(friend =>
                    <div className={s.friendItem}>
                        <div className={s.avaBtn}>
                            <NavLink to={'/profile/' + friend.id}>
                                <img className={s.avatar} alt={'avatar'}
                                     src={friend.photos.small != null ? friend.photos.small : userAvatar}/>
                            </NavLink>
                            {friend.followed
                                ? <Button name={'Unfollow'} size={'small'} callBack={() => props.unfollow(friend.id)}
                                          disabled={props.followingInProgress.some((el) => el === friend.id)}/>
                                : <Button size={'small'} name={'Follow'} callBack={() => {
                                    props.follow(friend.id)
                                }} disabled={props.followingInProgress.some(el => el === friend.id)}/>}
                        </div>
                        <div className={s.friendDescription}>
                            <div className={s.name}>{friend.name}</div>
                            <div className={s.status}>{friend.status}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Friends;
