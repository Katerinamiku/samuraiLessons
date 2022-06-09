import React from 'react';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./myPosts/ProfileInfo/ProfileInfo";
import {ProfilePageType} from './../../Redux/State'

type DataType ={
    data: ProfilePageType
}

export const Profile = (props:DataType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.data}/>
        </div>
    );

}
