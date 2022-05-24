import React from 'react';
const BackgroundCover = require('../components/img/BGcovering.jpg');

export const Content = () => {
    return (
        <main className={'content'}>
            <div>
                <img src={BackgroundCover} alt='background cover'/>
            </div>
            <div>
                ava
            </div>
            <div>my posts
                <div>New Post</div>
                <div>Post1</div>
                <div>Post2</div>
            </div>
        </main>
    );

}