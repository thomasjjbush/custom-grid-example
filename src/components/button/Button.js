import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    const Cta = styled.button`
        ${props.primary && `
            min-width: 100px;
            padding: 10px;
            border: solid 2px white;
            border-radius: 5px;
            background: transparent;
            color: white;
            font-size: 16px;
            position: relative;
            z-index: 1000;
        `}
    `;
    return (
        <Cta>
            {props.label}
        </Cta>
    );
}

export default Button;