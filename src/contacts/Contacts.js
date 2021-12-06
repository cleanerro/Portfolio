import React from 'react';
import s from './Contacts.module.css';

export const Contacts = () => {

    return (
        <div className={s.contactsBlock}>
            <div className={s.container}>
                <h2>Contacts</h2>
                <form className={s.form}>
                    <input className={s.input}></input>
                    <input className={s.input}></input>
                    <textarea className={s.input}></textarea>

                </form>
                <button>Send</button>
            </div>

        </div>
    )
}

