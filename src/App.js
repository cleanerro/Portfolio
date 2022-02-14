import React from 'react';
import './App.css';

import {Skills} from "./skills/Skills";

import {Contacts} from "./contacts/Contacts";
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Portfolio} from "./portfolio/Portfolio";
import {Footer} from "./footer/Footer";


export const App = () => {
    return (
        <div className='App'>
            <Header/>
            <Main/>
            {/*<AboutMe/>*/}
            <Skills/>
            <Portfolio/>
            <Contacts/>
            <Footer/>
        </div>
    );
}
