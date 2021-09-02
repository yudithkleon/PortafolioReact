import React from "react";
import { H2styled } from "../styled/H2styled";
import { Exp } from "../styled/ExpContainer";
import { Habil } from "../styled/HabilContainer";
import {AppS,Avatar,Img,Name,H2,Profesion,Location, Certifica, H1}  from '../styled/AppStyled' 

export const Habilidades = () => {
  return (
    <div>
      <H2styled name="Mis Habilidades" />
      <Habil>
        <div className="Habilidades-itms">
          <Certifica>
              <div>
              <label for="file">HTML:</label>
              <progress value="70" max="100">70 %</progress>
              </div>
              <div>
              <label for="file">JavaScript:</label>
              <progress value="70" max="100">30 %</progress>
              </div> 
              <div>
              <label for="file">Modelado UML, BPMN</label>
              <progress value="70" max="100">80 %</progress>
              </div>
               <div>
              <label for="file">React</label>
              <progress value="70" max="100">30 %</progress>
              </div>
              <div>
              <label for="file">Mysql</label>
              <progress value="70" max="100">40 %</progress>
              </div>
          </Certifica>
        </div>
      </Habil>
    </div>
  );
};
