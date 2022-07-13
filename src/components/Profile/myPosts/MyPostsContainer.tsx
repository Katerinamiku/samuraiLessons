import React from 'react';
import {addPostAC, PostType, UpdateNewPostTextAC} from "../../../Redux/ProfilePageReducer"
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../Redux/reduxStore";
import {Dispatch} from "redux";


//конткйнер может принимать все данные вскючая стор и передвать что нужно презентационной

type MapStateToPropsType = {
    posts: Array<PostType>,
    newPostText: string
}
type DispatchToPropsType = {
    updateNewPostText: (newText: string) => void,
    addPost: () => void
}
//обькдиненный тип для всего MyPosts- передаем его в props
export type  PostsPropsType =  MapStateToPropsType & DispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const dispatchToProps = (dispatch: Dispatch): DispatchToPropsType => {
    return {
        updateNewPostText: (newText: string) => {
            dispatch(UpdateNewPostTextAC(newText))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, dispatchToProps)(MyPosts);
