import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight, FaCircle } from 'react-icons/fa';

import variables from '../variables.json';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Container = styled.div`
  flex: 1; 
  overflow: hidden;
`;

const Slider = styled.div`
  width: ${({ length }) => length * 100}%;
  transform: translateX(${({ offset, length }) => `-${offset/length * 100}%`});
  transition: transform 0.3s ease-in;
  display: flex;
`;

const Item = styled.span`
  width: ${({ length }) => 100 / length}%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-size: 1.75rem;

  :hover {
    opacity: 0.7;
  }

  :first-child {
    padding-right: 1em;
  }

  :last-child {
    padding-left: 1em;
  }
`;

export default React.memo(function Carousel({ children, autoplay = false }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if(autoplay) {
      const timer = setInterval(() => {
        setActiveIndex(i => (i + 1) % children.length)
      }, 4000)
  
      return () => {
        clearInterval(timer);
      }
    }
  }, [children, autoplay])

  return (
    <>
      <Wrapper>
        {children.length > 0 && 
          <NavArrow style={{ visibility: activeIndex > 0 ? 'visible' : 'hidden' }} onClick={() => setActiveIndex(i => i-1 )}>
            <FaChevronLeft />
          </NavArrow>
        }
        <Container>
          <Slider length={children.length} offset={activeIndex}>
            {children.length > 0 ?
              children.map((child, i) => <Item key={i} length={children.length}>{child}</Item>):
              <Item length={1}>{children}</Item>
            }
          </Slider>
        </Container>
        {children.length > 0 && 
          <NavArrow style={{ visibility: activeIndex < children.length - 1 ? 'visible' : 'hidden' }} onClick={() => setActiveIndex(i => i+1 )}>
            <FaChevronRight />
          </NavArrow>
        }
      </Wrapper>
      <Selectors>
        {Array.from({ length: children.length }).map((_, i) =>
          <Selector key={i} onClick={() => setActiveIndex(i)}>
            <FaCircle style={{ color: activeIndex==i ? variables.colorSecondary3 : variables.colorSecondary1, transition: 'color 0.3s ease-in' }}/>  
          </Selector>
        )}
      </Selectors>
    </>
  );
})
