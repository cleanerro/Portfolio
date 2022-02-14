import React from 'react'
import s from './AboutMe.module.scss';
import {Title} from "../common/components/title/Title";


export const AboutMe = () => {
    return (
        <div className={s.aboutMe}>
            <div className={s.container}>
                <Title text='about me'/>
                <div className={s.info}>
                    <div className={s.img}>fddfd</div>
                    <div className={s.text} >
                        <p>
                                 Front-end developer with
                                experience in creating SPA,
                            using React, Redux, JS, HTML/CSS. I like to create UI
                            and contemplate the result of my work. I'm improving my
                            skills in this direction and expanding them with new
                            technologies.
                            Open to your suggestions!

                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}
