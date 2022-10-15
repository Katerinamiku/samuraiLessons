import React from 'react';
import userAvatar from "../../common/userAvatar.png";
import {UsersType} from "../../Redux/reducers/FriendsReducer";
import s from "./Friends.module.scss";


type FriendPropsType = {
    friends: Array<UsersType>
}

const Friends = (props: FriendPropsType) => {

    if (!props.friends.length) {
        return <div className={s.friendsTitle}> Friends not found</div>
    }
    return (
        <div className={s.friendsBlock}>
            <div className={s.friendsTitle}>My Friends</div>
            <div className={s.friendsList}>
                {props.friends.map(friend =>
                    <div className={s.friendItem}>
                        <img className={s.avatar} src={friend.photos.small != null ? friend.photos.small : userAvatar}/>
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
