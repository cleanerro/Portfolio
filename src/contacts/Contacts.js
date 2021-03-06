import React from 'react';
import s from './Contacts.module.scss';
import {Title} from "../common/components/title/Title";

export const Contacts = () => {

    return (
        <div id={'contacts'} className={s.contactsBlock}>
            <div className={s.container}>
                <Title text = 'contacts' />
                <form className={s.form}>
                    <input className={s.input} />
                    <input className={s.input}/>
                    <textarea className={s.input}/>
                </form>
                <button>Send</button>
            </div>

        </div>
    )
}

