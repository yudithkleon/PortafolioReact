import React from 'react';
import {AppS,Avatar,Img,Name,H2,Profesion,Location, Certifica, H1}  from '../styled/AppStyled' 

const App = () => {
    return(
        <AppS>
            <div className = "App-container">
                <Avatar>
                    <figure>
                        <Img src="https://res.cloudinary.com/danimel/image/upload/v1630541889/foto_w5rgh9.jpg" alt="Mi Avatar"/>
                    </figure>
                </Avatar>
                <Name>
                    <H2>Yudith Leon</H2>
                </Name>
                <Profesion>
                    <p>Estudiante de la Academia Geek</p>
                </Profesion>
                <Location> 
                    <p>Medellín, Colombia</p>
                </Location>
                <Profesion>
                    <p>Estudiante de 9no semestre de Ingenieria de Sistemas</p>
                </Profesion>
                <Location>
                    <p>Mérida-Venezuela</p>
                </Location>
                <div className = "App-social">
                   <p>Redes Sociales</p> 
                </div> 
            </div>   
        </AppS>
    )
}
export default App;
