import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post'

export const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button> Add Post</button>
            </div>
            <div className={s.post}>
                <Post message={'Hi, how are you'} likes={23}/>
                <Post message={'Its my first post'} likes={55}/>
            </div>
        </div>
    );
}
