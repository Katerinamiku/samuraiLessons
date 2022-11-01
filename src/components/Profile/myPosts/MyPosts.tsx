import React from 'react';
import s from './MyPosts.module.scss'
import {Post} from './Post/Post'
import {PostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utilites/validators";
import {TextAreaCommon} from "../../Common/FormsControls/TextAreaCommon";
import {Button} from "../../Common/Button/Button";
import {UserProfileType} from "../../../Redux/reducers/ProfilePageReducer";

export type NewPostFormPropsType = {
    NewPostText: string
    profile: UserProfileType | null
}

export const MyPosts = React.memo(function (props: PostsPropsType) {
    let postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likes={p.likes} profile={props.profile}/>)

    let addPostHandler = (formData: NewPostFormPropsType) => {
        props.addPost(formData.NewPostText)
        formData.NewPostText = '';
    }

    return (
        <div className={s.postsBlock}>
            <div className={s.title}>My posts</div>
            <div>
                <AddNewPostFromRedux onSubmit={addPostHandler}/>
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    );
});

//-----------------------FORM------------------------------

const max30 = maxLengthCreator(30)
const AddNewPostForm: React.FC<InjectedFormProps<NewPostFormPropsType>> = (props) => {
    return (
        <div className={s.postInput}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'NewPostText'}
                           component={TextAreaCommon}
                           placeholder={'Meow something'}
                           validate={[requiredField, max30]}/>
                </div>
                <div>
                    <Button name={'Add post'} callBack={() => {
                    }} size={'large'}/>
                </div>
            </form>
        </div>
    )
}
const AddNewPostFromRedux = reduxForm<NewPostFormPropsType>({form: 'profileAddMessageForm'})(AddNewPostForm)
