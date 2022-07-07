import React from 'react';
import {ProfileInfo} from "./myPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {DispatchType, RootStateType} from "../../Redux/reduxStore";

// type ReduxStoreTypeProfile = {
//     state: RootStateType
//     dispatch: DispatchType
// }

export const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                // state={props.state}
                // dispatch={props.dispatch}
                // posts={props.profilePage.posts}
                // newPostText={props.profilePage.newPostText}
                // dispatch={props.dispatch}
            />
        </div>
    );

}

