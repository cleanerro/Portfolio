import React from 'react';
import s from './Portfolio.module.css';
import {Project} from "./project/Project";

export const Portfolio =() =>  {

    return (
        <div className={s.portfolioBlock}>
            <div className={s.container}>
                <h2>Portfolio</h2>
                <div className={s.projects}>
                  <Project title = {'Name1'} description = {'Ipsum the printing and typesetting industry'}/>
                  <Project title = {'Name2'} description = {'Lorem Ipsum is simply printing and '}/>

                </div>

            </div>

        </div>
    )
}

