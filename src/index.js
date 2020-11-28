import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Movelaria from './componentes/Movelaria';



const root = window.document.getElementById('root');

ReactDOM.render(

<BrowserRouter>
    <Movelaria />
</BrowserRouter>,

root)