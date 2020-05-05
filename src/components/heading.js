import React from 'react';
import styled from 'styled-components';

import styles from '../variables.json';

const Heading = styled.h2`
  color: ${({ type }) => type == 'primary' ? 
    styles.colorPrimary0 : 
      type == 'secondary' ?
      styles.colorSecondary0 :
      'inherit'
  };
  padding-left: 1rem;
  position: relative;

  &:before {
    position: absolute;
    left: 0;
    content: '';
    width: 4px;
    height: 2rem;
    background-color: ${({ type }) => type == 'primary' ? 
      styles.colorPrimary0 : 
        type == 'secondary' ?
        styles.colorSecondary0 :
        '#333'
    };
  }
`;

export default Heading;
