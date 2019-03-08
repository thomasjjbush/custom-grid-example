import React from 'react';
import styled from 'styled-components';

const Hamburger = (props) => {
    return (
        <Bun onClick={() => props.onClick()}>
            <Sauce open={props.open} />
            <Lettuce open={props.open} />
            <Cheese open={props.open} />
            <Patty open={props.open} />
        </Bun>
    );
}

const Bun = styled.div`
    width: 30px;
    height: 30px;
    position: relative;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;
    & > span {
        display: block;
        position: absolute;
        height: 5px;
        width: 100%;
        background: black;
        border-radius: 3px;
        opacity: 1;
        left: 0%;
        transform: rotate(0deg);
        transition: .1s ease-in-out;
    }
`;
const Sauce = styled.span`
    top: 0px;
    ${props => props.open && `
        top: 12px;
        width: 0%;
        left: 50%;
        opacity: 0 !important;
    `}
`;
const Lettuce = styled.span`
    top: 12px;
    ${props => props.open && `
        transform: rotate(45deg) !important;
    `}
`;  
const Cheese = styled.span`
    top: 12px;
    ${props => props.open && `
        transform: rotate(-45deg) !important;
    `}
`;
const Patty = styled.span`
    top: 24px;
    ${props => props.open && `
        top: 12px;
        width: 0%;
        left: 50%;
        opacity: 0 !important;
    `}
`;

export default Hamburger;

