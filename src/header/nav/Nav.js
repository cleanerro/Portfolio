import React from 'react';
import s from './Nav.module.scss';

export const Nav =() =>  {
    return (
        <div className={s.nav}>
            <a href="#">Home</a>
            <a href="#skills">Skills</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contacts">Contacts</a>


        </div>
    );
}

