import React from 'react';
import {Profile} from "./Profile";
import {Messages} from "./Messages";
import {News} from "./News";
import {Music} from "./Music";
import {Settings} from "./Settings";

export const NavBar = () => {
    return (
        <div className={'nav'}>
            <Profile />
            <Messages />
            <News />
            <Music />
            <Settings />
        </div>
    );

}