import styled from "styled-components";

const AppStyled = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: auto auto;
`;

const AppAvatar = styled.div`
  padding: 2em 0 0 0;
`;

const AppImg = styled.img`
  border.radius: 70%;
  widtg: 160px;
  height: 160px;
  border: 2px solid #3f51b5;
  margin: 0 auto;
  display: block;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0, 0.6);
  object-fit: cover;
`;

const AppName = styled.div`
         text-align:center;
  `;

const AppH2 = styled.h2`
  font-family: 'cursive';
  font-weight: 400;
  letter-spacing: 1.2px;
  margin: .5em 0 0 0;
  color: #448AFF;
  `;
  const AppH1 = styled.h1`
  font-family: 'cursive';
  font-weight: 200;
  font size: 1em;
  letter-spacing: 1.2px;
  margin: .5em 0 0 0;
  `;

const AppProfesion = styled.p`
  color: #757575;
  font-size: 1em;
  font-weight: 400;
`;

const AppLocation = styled.p`
  color: #757575;
  font-size: 1em;
  font-weight: 400;
`;

const AppCertificacion =styled.li`
font-family: 'cursive';
  font-weight: 400;
  letter-spacing: 1.2px;
  margin: .5em 0 0 0;
 font-size: 15px;
`

export const AppS = AppStyled
export const Avatar = AppAvatar
export const Img = AppImg
export const Name = AppName
export const H2 = AppH2
export const Profesion = AppProfesion
export const Location = AppLocation
export const Certifica =AppCertificacion
export const H1 = AppH1
