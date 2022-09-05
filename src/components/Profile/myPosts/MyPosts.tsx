import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post'

import {PostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utilites/validators";
import {TextareaCommon} from "../../Common/FormsControls/TextareaCommon";

export type NewPostFormPropsType = {
    NewPostText: string
}

export const MyPosts = (props: PostsPropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likes={p.likes}/>)

    let addPostHandler = (formData: NewPostFormPropsType) => {
        props.addPost(formData.NewPostText)
        formData.NewPostText = '';
    }

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <AddNewPostFromRedux onSubmit={addPostHandler}/>
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    );
}
//-----------------------FORM------------------------------

const max30 = maxLengthCreator(30)
const AddNewPostForm: React.FC<InjectedFormProps<NewPostFormPropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'NewPostText'}
                       component={TextareaCommon}
                       placeholder={'Meow something'}
                       validate={[requiredField, max30]}/>
            </div>
            <div>
                <button> Add Post</button>
            </div>
        </form>
    )
}
const AddNewPostFromRedux = reduxForm<NewPostFormPropsType>({form: 'profileAddMessageForm'})(AddNewPostForm)
