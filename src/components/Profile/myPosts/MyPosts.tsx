import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post'

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div> <textarea></textarea></div>
               <div><button> Add Post</button></div>
            </div>
            <div className={s.post}>
                <Post message={'Hi, how are you'} likes={23}/>
                <Post message={'Its my first post'} likes={55}/>
            </div>
        </div>
    );
}
