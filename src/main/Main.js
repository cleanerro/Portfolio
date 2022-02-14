import React from 'react'
import s from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import photo from './../assets/img/logo.jpg'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <div className={s.text}>
                    <h2> I'm Roman Stepaniuk</h2>
                    <h4>Frontend Developer</h4>
                </div>
                <div className={s.photo}>
                    <img src={photo}/>
                </div>
            </div>

        </div>
    )
}


