import React from 'react';
import s from './Project.module.scss';

export const Project =(props) =>  {
    return (
        <div className={s.project}>
            <div className={s.image} style={props.style}>
                <a href={props.path} target="_blank">
                    <button className={s.projectBtn}>Open</button>
                </a>
            </div>
            <h3 className={s.projectTitle}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>


        </div>

    );
}

