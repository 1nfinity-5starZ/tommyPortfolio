import React from 'react';
import styled from 'styled-components';

import styles from '../variables.json';

const Container = styled.span`
  border-radius: 1.25rem;
  background-color: ${styles.colorSecondary0};
  padding: 0.5rem 1rem;
  color: #FFF;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-size: 1rem;

  &:hover {
    background-color: ${styles.colorSecondary2};
  }

  &:active {
    background-color: ${styles.colorSecondary1};
  }
`;

export default function Button({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}
