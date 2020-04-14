import React from 'react';
import styled from 'styled-components';

import styles from '../variables.json';

const Container = styled.span`
  border-radius: 1.25rem;
  background-color: ${styles.primaryDark};
  padding: 0.5rem 1rem;
  color: #FFF;
  margin-bottom: 1rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-size: 1rem;

  &:hover {
    background-color: ${styles.primaryColor};
  }

  &:active {
    background-color: ${styles.primaryLight};
  }
`;

export default function Button({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}
