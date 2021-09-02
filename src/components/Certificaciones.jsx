import React from "react";
import { H2styled } from "../styled/H2styled";
import { Exp } from "../styled/ExpContainer";
import {AppS,Avatar,Img,Name,H2,Profesion,Location, Certifica, H1}  from '../styled/AppStyled' 

export const Certificaciones = () => {
  return (
    <div>
      <H2styled name="Mis Certificaciones" />
      <Exp>
        <div className="Certificaciones-itms">
          <Certifica>
            <li>
               Academia Geek- <span>2021</span>
              <p>Desarrollador Frontend Junior</p>
            </li>

            <li>
              U.E Santos Marquinas- <span>2006</span>
              <p>Basico de Word</p>
            </li>

            <li>
              U.E Santos Marquinas- <span>2006</span>
              <p>Basico de Excel</p>
            </li>

            <li>
              Centro Contable de Venezuela- <span>2003</span>
              <p>Computacion Basica</p>
            </li>
          </Certifica>
        </div>
      </Exp>
    </div>
  );
};
