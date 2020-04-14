import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerClass from '../styles/header.module.scss';

const Drawer = ({ open, onToggle, size = 200, children }) => {
  return (
    <div 
      className={`${headerClass.drawer} mobile`} 
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
    </div>
  )
}

Drawer.propTypes = {
  open: PropTypes.bool,
}

Drawer.defaultProps = {
  open: false,
}

export default Drawer
