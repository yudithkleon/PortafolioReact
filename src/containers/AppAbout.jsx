import React from 'react';
import styled from 'styled-components';
import App from '../components/app';
import  {Experiencia}  from '../components/Experiencia';
import {Education} from '../components/Educacion';
import { Certificaciones} from '../components/Certificaciones';
import { Habilidades } from '../components/Habilidades';

const GlobalStyle = styled.div`
body{
    font family: 'cursive';
    margin: 0;
    padding: 0;
    background: #F5F5F5;
}
`;

export const AppAbout = () =>{
    return(
        <GlobalStyle>
            <App/>
            <Education/>
            <Experiencia/>
            <Certificaciones/>
            <Habilidades/>
        </GlobalStyle>
    )
}