import React from 'react';
const Logo = require('../components/img/logoS.jpg');

export const Header = () => {
    return (
        <div className={'header'}>
            <img src={Logo} alt='logo'/>
        </div>
    );

}
