import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

import variables from '../variables.json';

const StyledDrawer = styled.div`
  position: fixed;
  top: 0; bottom: 0; right: 0;
  z-index: 99;
  background-color: rgba(0,0,0, 0.7);

  aside {
    position: absolute;
    width: 33%;
    min-width: 200px;
    background-color: ${variables.colorPrimary4};
    transition: all 0.2s ease-in;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    color: #FFF;
    z-index: 100;
    right: 0;

    a {
      text-decoration: none;
      margin: 1.5rem 0;
      font-size: 1.5rem;
      color: white;

      :hover {
        filter: brightness(1.2)
      }
    }
  }
`;

const Drawer = ({ open, onToggle, children }) => {
  return (
    <StyledDrawer 
      className={`mobile tablet`} 
      style={{ left: open ? 0 : '100%' }}
      onClick={() => onToggle(false)}
    >
      <aside 
        onClick={e => e.stopPropagation()}
        style={{
          transform: `translateX(${open ? 0 : '100%'})`,
        }}
      >
        {children}
      </aside>
    </StyledDrawer>
  )
}

Drawer.propTypes = {
  open: PropTypes.bool,
}

Drawer.defaultProps = {
  open: false,
}

export default Drawer
