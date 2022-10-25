import React from 'react';
import userAvatar from "../../common/images/userAvatar.png";
import {UsersType} from "../../Redux/reducers/FriendsReducer";
import s from "./Friends.module.scss";
import {Pagination} from "../Common/Pagination/Pagination";
import {NavLink} from "react-router-dom";


type FriendPropsType = {
    friends: Array<UsersType>
    pageSize: number
    totalFriendsCount: number
    currentPage: number
    onPageChanged: (p: number) => void
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
                        <NavLink to={'/profile/' + friend.id}>
                            <img className={s.avatar} alt={'avatar'} src={friend.photos.small != null ? friend.photos.small : userAvatar}/>
                        </NavLink>
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
