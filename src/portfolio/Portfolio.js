import React from 'react';
import s from './Portfolio.module.scss';
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import  socialNetworkImg from './../assets/img/sicialNetwork.png'
import  todoListImg from './../assets/img/todolist.jpg'

export const Portfolio =() =>  {

    const social = {backgroundImage: `url(${socialNetworkImg})`}
    const todoList = {backgroundImage: `url(${todoListImg})`}

    return (
        <div id='portfolio' className={s.portfolioBlock}>
            <div className={s.container}>
                <Title text = 'portfolio' />

                <div className={s.projects}>
                  <Project style = {social} title = {'Social network'} description = {''}/>
                  <Project style = {todoList} title = {'Todo list'} description = {' '}/>

                </div>

            </div>

        </div>
    )
}

