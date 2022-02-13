import React from 'react';
import s from './Skills.module.scss';
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import  reactImg from './../assets/img/react.png'
import  jsImg from './../assets/img/js.png'
import  reduxImg from './../assets/img/redux.png'
import  htmlImg from './../assets/img/html.png'

export const Skills = () => {
    const react = {backgroundImage: `url(${reactImg})`}
    const js = {backgroundImage: `url(${jsImg})`}
    const redux = {backgroundImage: `url(${reduxImg})`}
    const html = {backgroundImage: `url(${htmlImg})`}
    return (
        <div className={s.skillsBlock}>
            <div className={s.container}>
                <Title text='skills'/>
                <div className={s.skills}>
                    <Skill title={'React'}
                           style = {react}
                           description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry'}/>
                    <Skill title={'JavaScript'}
                           style = {js}
                           description={' Ipsum is simply dummy text of the printing and typesetting industry'}/>
                    <Skill title={'Redux'}
                           style = {redux}
                           description={'dummy text of the printing and typesetting industry'}/>
                    <Skill title={'HTML'}
                           style = {html}
                           description={'dummy text of the printing and typesetting industry'}/>

                </div>

            </div>

        </div>
    )
}

