import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post'
import {ProfilePageType} from "../../../Redux/State"

type MyPostsTypes ={
    postsData: ProfilePageType
}

export const MyPosts = (props:MyPostsTypes) => {

      let postsElements = props.postsData.posts.map(p=><Post id={p.id} message={p.message} likes={p.likes}/>)

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div> <textarea></textarea></div>
               <div><button> Add Post</button></div>
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    );
}
