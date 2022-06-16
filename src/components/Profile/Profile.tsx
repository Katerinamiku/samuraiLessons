import React from 'react';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./myPosts/ProfileInfo/ProfileInfo";
import {ProfilePageType} from './../../Redux/State'

type DataType ={
    data: ProfilePageType
    addPost: (PostText:string)=> void
}

export const Profile = (props:DataType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.data} addPost={props.addPost}/>
        </div>
    );

}

