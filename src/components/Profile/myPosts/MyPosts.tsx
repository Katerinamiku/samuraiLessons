import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post'
import {ProfilePageType} from "../../../Redux/State"

type MyPostsTypes = {
    postsData: ProfilePageType
    addPost: (PostText: string) => void
}

export const MyPosts = (props: MyPostsTypes) => {

    let postsElements = props.postsData.posts.map(p => <Post id={p.id} message={p.message} likes={p.likes}/>)

    let [error, setError] = useState<string | null>(null)
    let postMessageRef = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (postMessageRef.current) {
            props.addPost(postMessageRef.current.value.trim())
            postMessageRef.current.value = ''
        } else {
            setError('Text is required!')
        }
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            addPost();
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div><textarea ref={postMessageRef}
                               onKeyPress={onKeyPressHandler}
                               className={error ? s.error : ''}></textarea></div>
                <div>
                    <button onClick={addPost}> Add Post</button>
                    {error && <div className={s.errorMessage}>{error}</div>}
                </div>
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    );
}
