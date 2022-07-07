import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post'
import {PostType} from "../../../Redux/Store";

type MyPostsTypes = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText: (newText: string) => void
    addPost: (newPostText: string) => void
}

export const MyPosts = (props: MyPostsTypes) => {

    let [error, setError] = useState<string>('')

    let postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likes={p.likes}/>)

    let addPostHandler = () => {
        if (props.newPostText !== '') {
            props.addPost(props.newPostText)
        } else {
            setError('Text is required!')
        }
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            addPostHandler();
        }
    }

    const NewPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.updateNewPostText(newText)
    }
    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div><textarea placeholder={'Meow something'}
                               value={props.newPostText}
                               onChange={NewPostTextHandler}
                               onKeyPress={onKeyPressHandler}
                               className={error ? s.error : ''}
                ></textarea></div>
                <div>
                    <button onClick={addPostHandler}> Add Post</button>
                    {error && <div className={s.errorMessage}>{error}</div>}
                </div>
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    );
}
