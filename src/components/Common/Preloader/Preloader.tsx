import React from 'react';
import preloader from '../../../common/images/pawsPreloader.gif';
import s from './Preloader.module.scss';

const Preloader = () => {
    return (
        <span className={s.preloader}>
            <img src={preloader}/>
        </span>
    );
};

export default Preloader;
