import React from 'react';
import s from './Nav.module.scss';

export const Nav =() =>  {
    return (
        <div className={s.nav}>
            <a href="#">Home</a>
            <a href="">Skills</a>
            <a href="">Portfolio</a>
            <a href="">Contacts</a>


        </div>
    );
}

