
import React, { useLayoutEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const Card = styled.span`
    border-radius: 1.5rem;
    box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.2);
    padding: 1rem 1.5rem;
    color: #FFF;
    position: relative;
    overflow: hidden;

    .brandIcon {
        position: absolute;
        font-size: ${props => props.iconSize || 0}px;
        top: 0;
        right: -${props => props.iconSize/3 || 0}px;
        opacity: 0.1;
        z-index: 80;
    }
`;

export default React.memo(function({ children, ...props }) {
    const [width, setWidth] = useState(0);

    const ref = useRef();

    useLayoutEffect(() => {
        if(ref.current) {
            setWidth(ref.current.offsetHeight * 3/2)
        }
    })

    return (
        <Card ref={ref} {...props} iconSize={width}>
            <div style={{ zIndex: 90 }}>
                {children}
            </div>
        </Card>
    )
})
