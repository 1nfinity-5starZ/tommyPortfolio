import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight, FaCircle } from 'react-icons/fa';

import variables from '../variables.json';

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Container = styled.div`
  flex: 1; 
  height: 100%;
  position: relative; 
  overflow: hidden;
`;

const Item = styled.span`
  width: 100%;
  height: 100%;
  position: absolute;
  left: ${({ offset }) => offset * 100}%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: left 0.3s ease-in;
`;

const Selectors = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Selector = styled.span`
  margin: 0 1rem;
  cursor: pointer;
  
  :hover {
    opacity: 0.8;
  }
`;

const NavArrow = styled.span`
  zIndex: 99;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;

export default React.memo(function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setActiveIndex(i => (i + 1) % children.length)
  //   }, 4000)

  //   return () => {
  //     clearInterval(timer);
  //   }
  // }, [children])

  return (
    <>
      <Wrapper>
        {children.length > 0 && 
          <NavArrow style={{ visibility: activeIndex > 0 ? 'visible' : 'hidden' }} onClick={() => setActiveIndex(i => i-1 )}>
            <FaChevronLeft />
          </NavArrow>
        }
        <Container>
          {children.map((child, i) => <Item offset={i - activeIndex}>{child}</Item>)}
        </Container>
        {children.length > 0 && 
          <NavArrow style={{ visibility: activeIndex < children.length - 1 ? 'visible' : 'hidden' }} onClick={() => setActiveIndex(i => i+1 )}>
            <FaChevronRight />
          </NavArrow>
        }
      </Wrapper>
      <Selectors>
        {Array.from({ length: children.length }).map((_, i) =>
          <Selector onClick={() => setActiveIndex(i)}>
            <FaCircle style={{ color: activeIndex==i ? variables.colorSecondary1_3 : variables.colorSecondary1_1, transition: 'color 0.3s ease-in' }}/>  
          </Selector>
        )}
      </Selectors>
    </>
  );
})
