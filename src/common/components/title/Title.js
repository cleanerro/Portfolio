import React from 'react';
import s from './Title.module.css';
export const Title =(props) =>  {
    return (
                <div className={s.title}>
                    <h2>{props.text}</h2>
                </div>
    )
}

