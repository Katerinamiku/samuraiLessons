import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post'
import {ActionsTypes, PostType, StoreType} from "../../../Redux/State"

type MyPostsTypes = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (actions: ActionsTypes) => void
}

export const MyPosts = (props: MyPostsTypes) => {

    let postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likes={p.likes}/>)

    let addPost = () => {
        props.dispatch({type: "ADD-POST"})
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            addPost();
        }
    }

    const NewPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text})
    }
    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div><textarea value={props.newPostText}
                               onChange={NewPostTextHandler}
                               onKeyPress={onKeyPressHandler}
                               // className={error ? s.error : ''}
                ></textarea></div>
                <div>
                    <button onClick={addPost}> Add Post</button>
                    {/*{error && <div className={s.errorMessage}>{error}</div>}*/}
                </div>
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    );
}
