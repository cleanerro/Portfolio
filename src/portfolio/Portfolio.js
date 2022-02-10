import React from 'react';
import s from './Portfolio.module.css';
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";

export const Portfolio =() =>  {

    return (
        <div className={s.portfolioBlock}>
            <div className={s.container}>
                <Title text = 'portfolio' />

                <div className={s.projects}>
                  <Project title = {'Social network'} description = {'Ipsum the printing and typesetting industry sum the printing and typesetting industry'}/>
                  <Project title = {'Todo list'} description = {'Lorem Ipsum is simply printing and '}/>

                </div>

            </div>

        </div>
    )
}

