import React from 'react';
import userAvatar from "../../components/img/userAvatar.png";
import {UsersType} from "../../Redux/reducers/FriendsReducer";
import s from "./Users.module.css";



type FriendPropsType = {
    friends: Array<UsersType>
}

const Friends = (props: FriendPropsType) => {

    if (!props.friends.length) {
        return <div> Friends not found</div>
    }
        return (
        <div>
            {props.friends.map(friend =>
                <div>
                    <img className={s.avatar} src={friend.photos.small != null ? friend.photos.small : userAvatar}/>
                    <span>
                        <div>{friend.name}</div>
                        <div>{friend.status}</div>
                    </span>
                </div>
            )}
        </div>
    );
};

export default Friends;
