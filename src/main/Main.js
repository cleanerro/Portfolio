import React from 'react';
import s from './Main.module.css';
import styleContainer from '../styles/Container.module.css'


export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <h1> I am Roman Stepaniuk</h1>
                    <span>Frontend Developer</span>
                </div>
                <div className={s.photo}>

            </div>


            </div>
        </div>
    )
}
