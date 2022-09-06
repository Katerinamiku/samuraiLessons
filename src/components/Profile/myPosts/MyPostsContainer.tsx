import React from 'react';
import {addPostAC, PostType} from "../../../Redux/reducers/ProfilePageReducer"
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../Redux/reduxStore";
import {Dispatch} from "redux";


//конткйнер может принимать все данные вскючая стор и передвать что нужно презентационной

type MapStateToPropsType = {
    posts: Array<PostType>
}
type DispatchToPropsType = {
    addPost: (NewPostText: string) => void
}
//обькдиненный тип для всего MyPosts- передаем его в props
export type  PostsPropsType =  MapStateToPropsType & DispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}
const dispatchToProps = (dispatch: Dispatch): DispatchToPropsType => {
    return {
        addPost: (NewPostText: string) => {
            dispatch(addPostAC(NewPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, dispatchToProps)(MyPosts);
