import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
    font-family: 'cursive';
    font-weight: 300;
    letter-spacing: 8px;
    margin: 1em 0 0 0;
    color: #448AFF;
    text-align: center;
    `;
  
    export const H2styled = ({name}) => <StyledH2>{name}</StyledH2>
    