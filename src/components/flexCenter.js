import React from 'react';

export default function({ children, style, props }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', ...style }} {...props}>
            {children}
        </div>
    )
}