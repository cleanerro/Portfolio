import React from 'react';
import s from './Skills.module.css';
import {Skill} from "./skill/Skill";
export const Skills =() =>  {

    return (
        <div className={s.skillsBlock}>
            <div className={s.container}>
                <h2>Skills</h2>
                <div className={s.skills}>
                    <Skill title = {'HTML'}
                           description = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry'}/>
                    <Skill title = {'JS'}
                           description = {' Ipsum is simply dummy text of the printing and typesetting industry'} />
                    <Skill title = {'React'}
                           description = {'dummy text of the printing and typesetting industry'} />

                </div>

            </div>

        </div>
    )
}

