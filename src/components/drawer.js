import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

const StyledDrawer = styled.div`
  position: fixed;
  top: 0; bottom: 0; right: 0;
  z-index: 99;
  background-color: rgba(0,0,0, 0.7);

  aside {
    position: absolute;
    width: 200px;
    background-color: $primary-darker;
    transition: all 0.2s ease-in;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    color: #FFF;
    z-index: 100;

    a {
      text-decoration: none;
    }
  }
`;

const Drawer = ({ open, onToggle, size = 200, children }) => {
  return (
    <StyledDrawer 
      className={`mobile`} 
      style={{ left: open ? 0 : '100%' }}
      onClick={() => onToggle(false)}
    >
      <aside 
        onClick={e => e.stopPropagation()}
        style={{
          width: size,
          right: open ? 0 : -size,
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
