import React from 'react'
import { H2styled } from '../styled/H2styled'
import { Container } from '../styled/EducationContainer'
import { H1 } from '../styled/AppStyled'


export const Education = () =>{
   return (
       <div>
           <H2styled name= "Mis Estudios"/>
           <Container>
              <div className="Education-item">
                   <H1>  IUTCM- <span>2007</span>
                        <p>T.S.U en Informatica</p>
                   </H1>
                   <H1>  ULA- <span>2022</span>
                        <p>Ingenieria de Sistemas</p>
                   </H1>
                   <H1>  Academia Geek- <span>2021</span>
                        <p>Desarrollador Frontend Junior</p>
                   </H1>
            </div>
           </Container>
           
       </div>
   )
}