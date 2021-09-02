import React from 'react'
import { H2styled } from '../styled/H2styled'
import { Exp } from '../styled/ExpContainer'


export const Experiencia = () =>{
   return (
       <div>
           <H2styled name= "Mi Experiencia"/>
           <Exp>
              <div className="Experiencia-itms">
                   <h1>  Laboratorio de Informatica- <span>2008</span>
                        <p>Cargo: Profesora de Introducion a la Computacion- En Linux</p>
                   </h1>
                   <h1> Academia Geek- <span>2021</span>
                        <p>Muchos Retos al Tiempo</p>
                   </h1>
                </div>
           </Exp>
           
       </div>
   )
}