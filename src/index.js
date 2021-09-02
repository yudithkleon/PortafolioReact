import React from 'react';
import ReactDOM from 'react-dom';

//referecia al componente About
import {AppAbout} from './containers/AppAbout';

ReactDOM.render(
    <AppAbout/>, //Lo que quiero mostrar
    document.getElementById('root') // y donde lo quiero mostrar
)

