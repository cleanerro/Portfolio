import React from 'react';
import s from './Footer.module.scss';
import gitImg from "../assets/img/git.png";
import inImg from "../assets/img/in.png";
import fbImg from "../assets/img/fb.png";
import telegramImg from "../assets/img/tel.png";


export const Footer = () => {
    const gitHub = {backgroundImage: `url(${gitImg})`}
    const facebook = {backgroundImage: `url(${fbImg})`}
    const linkedIn = {backgroundImage: `url(${inImg})`}
    const telegram = {backgroundImage: `url(${telegramImg})`}
    return (
        <div className={s.footerBlock}>
            <div className={s.container}>
                <h2>Stepaniuk Roman</h2>
                <div className={s.contacts}>
                    <a href="https://github.com/cleanerro">
                        <div className={s.contactBlock} style={gitHub}> </div>
                    </a>
                    <a href="https://www.linkedin.com/in/roman-stepanyuk-832918201/">
                        <div className={s.contactBlock} style={linkedIn}> </div>
                    </a>
                    <a href="https://www.facebook.com/roma.stepanyuk/">
                        <div className={s.contactBlock} style={facebook}> </div>
                    </a>
                    <a href="https://t.me/romastepaniuk">
                        <div className={s.contactBlock} style={telegram}> </div>
                    </a>
                </div>
                <h4>2022 All Rights Recerved</h4>
            </div>

        </div>
    )
}

