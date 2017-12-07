import React from 'react';
import Routes from '~src/routes';
import Header from '~src/components/Header';

import s from './App.scss'

const App = () =>
    <div className={s['container']}>
        <Header />
        { Routes }
    </div>;

export default App;
